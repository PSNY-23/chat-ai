import { StatsCounter } from "./stats-counter";
const Stats = () => {
    return ( 
        <section className='w-full py-12 md:py-16'>
        <div className='container px-4 md:px-6'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            <StatsCounter value={10000} label='Documents Processed' />
            <StatsCounter value={5000} label='Active Users' />
            <StatsCounter value={1000000} label='Questions Answered' />
            <StatsCounter value={99.9} label='Uptime Percentage' suffix='%' />
          </div>
        </div>
      </section>
     );
}
 
export default Stats;