

export default function About(){
    return(
        <div className="w-full flex flex-col content-center justify-center p-4">
            <div className="w-4/5 rounded-lg border-2 text-xl bg-accent-400 text-text m-2">
                <div className="text-2xl w-full bg-gradient-to-b from-header to-accent-400 h-12 pt-1 pl-2 rounded-t-md">
                    About Me
                </div>
                <div className="p-2 pt-0">
                    I'm a graduate student at the University of North Carolina in Chapel Hill, working towards my Master's degree in algebraic topology and geometry! I'm a passionate tutor with over 7 years of experience, in subjects ranging from early highschool to senior-level undergraduate math. In my spare time, I enjoy making pottery, exploring different eras of music, and coding!
                </div>
            </div>
            <div className="w-4/5 rounded-lg border-2 text-xl bg-accent-400 text-text m-2">
                <div className="text-2xl w-full bg-gradient-to-b from-header to-accent-400 h-12 pt-1 pl-2 rounded-t-md">
                    My Teaching
                </div>
                <div className="p-2 pt-0">
                {/*     My expertise is in focusing on my students' style of studying math. Everyone understands the rules of mathematics a bit differently, and my approach is to match that viewpoint and help my students grow as they travel their own path.<br/> 
                    I simulatneously introduce my own style of organization, putting the tools to succeed in my students' hands. */}
                    Everyone understands math in a different way, and it's my goal to find my student's path and walk 
                    along it with them. 
                </div>
            </div>
        </div>
    );
}