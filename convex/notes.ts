import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const addNotes = mutation({
  args: {
    fileId: v.string(),
    notes: v.any(),
    createdBy: v.string(),
  },
  handler: async (ctx, args) => {
    const recordId = await ctx.db
      .query("notes")
      .filter((q) => q.eq(q.field("fileId"), args.fileId))
      .collect();

    if (recordId?.length == 0) {
      await ctx.db.insert("notes", {
        fileId: args.fileId,
        notes: args.notes,
        createdBy: args.createdBy,
      });
    } else {
      await ctx.db.patch(recordId[0]._id, { notes: args.notes });
    }
  },
});

export const getAllNotes = query({
  args: {
    fileId: v.string(),
  },
  handler: async (ctx, args) => {
    try {
      // Fetch the notes based on fileId
      const result = await ctx.db
        .query("notes")
        .filter((q) => q.eq(q.field("fileId"), args.fileId))
        .collect();

      // Check if result exists and has notes
      if (result.length > 0) {
        console.log('notes:', result[0].notes); // Log the notes
        return result[0].notes; // Return the notes
      } else {
        // If no notes found, return an empty array or an appropriate message
        console.log('No notes found for fileId:', args.fileId);
        return []; // or return some default value like null, depending on your use case
      }
    } catch (error) {
      console.error("Error fetching notes:", error);
      throw new Error("Failed to fetch notes.");
    }
  },
});

