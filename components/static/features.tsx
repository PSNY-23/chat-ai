import { CheckCircle2, FileText, MessageSquare, Shield, Sparkles, Zap } from "lucide-react";
import { FeatureCard } from "./feature-card";

export const Features = () => {
    return ( 
        <section className='w-full py-12 md:py-24 lg:py-32 bg-muted/30'>
        <div className='container px-4 md:px-6'>
          <div className='flex flex-col items-center justify-center space-y-4 text-center mb-12'>
            <div className='inline-block px-3 py-1 rounded-full bg-black/10 text-black dark:bg-white/10 dark:text-white text-sm font-medium'>
              Powerful Features
            </div>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
              Everything You Need for <span className='mono-gradient-text'>PDF Intelligence</span>
            </h2>
            <p className='max-w-[800px] text-muted-foreground md:text-xl/relaxed'>
              Our platform combines cutting-edge AI with intuitive design to transform how you interact with documents
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <FeatureCard
              icon={<FileText className='h-10 w-10' />}
              title='Smart PDF Upload'
              description='Drag & drop or select PDFs of any size. Our system processes and indexes them for intelligent conversations.'
              className='feature-card-hover'
            />
            <FeatureCard
              icon={<MessageSquare className='h-10 w-10' />}
              title='AI-Powered Chat'
              description='Ask questions in natural language and get accurate answers based on your document content with context awareness.'
              className='feature-card-hover'
            />
            <FeatureCard
              icon={<Zap className='h-10 w-10' />}
              title='Lightning Fast'
              description='Advanced vector embeddings and optimized algorithms ensure quick and relevant responses to your queries.'
              className='feature-card-hover'
            />
            <FeatureCard
              icon={<Shield className='h-10 w-10' />}
              title='Secure & Private'
              description='Your documents are encrypted and processed securely. We prioritize your privacy with enterprise-grade security.'
              className='feature-card-hover'
            />
            <FeatureCard
              icon={<Sparkles className='h-10 w-10' />}
              title='Smart Summaries'
              description='Get instant summaries of entire documents or specific sections to quickly grasp key information and insights.'
              className='feature-card-hover'
            />
            <FeatureCard
              icon={<CheckCircle2 className='h-10 w-10' />}
              title='Export & Share'
              description='Export your chat history or share conversation links with team members for seamless collaboration.'
              className='feature-card-hover'
            />
          </div>
        </div>
      </section>
     );
}
 
export default Features;