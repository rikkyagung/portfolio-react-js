import { ButtonAction } from "../";

export default function Collab() {
   return (
      <section className="absolute left-0 right-0 flex w-full -translate-y-1/2 transform px-6 text-mangu-black md:px-10 lg:px-16">
         <div className="flex w-full flex-col items-center gap-4 rounded-lg bg-midwinter-mist p-6 text-center lg:flex-1 lg:flex-row lg:justify-between lg:p-8">
            <p className="flex-1 text-2xl font-semibold">Start to Collab?</p>
            <span className="flex-1 leading-loose">
               If any required about the collaboration, let's do some online
               chit-chat or grab some coffee
            </span>
            <div className="flex-1">
               <ButtonAction
                  types="primary"
                  url="mailto:rikkyagung11@gmail.com"
                  title="Arrange Here"
               />
            </div>
         </div>
      </section>
   );
}
