import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const createUser = mutation({
  args: {
    email: v.string(),
    name: v.string(),
    imageUrl: v.string(),
  },
  handler: async (ctx, args) => {
    //if user already exists
    const user = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("email"), args.email))
      .collect();

    //if not exist then insert new user entry
    if (user.length === 0) {
      await ctx.db.insert("users", {
        email: args.email,
        userName: args.name,
        imageUrl: args.imageUrl,
      });

      return { success: true, message: "User created successfully" };
    }

    return { success: false, message: "User already exists" };
  },
});
