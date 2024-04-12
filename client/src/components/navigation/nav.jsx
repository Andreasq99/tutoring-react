import { Button, ButtonGroup } from "@material-tailwind/react";

export default function Navbar(){
    return(
        <>
            <div className="w-full top-0 h-30 backdrop-blur-sm bg-header bg-opacity-75">
                <div className="container px-4 mx-auto h-full">
                    <div className="flex justify-between md:flex-column items-center h-full">
                        <a href="/"><div className="h-full flex justify-between items-center p-4">
                            <img src='Logo.png' width={80} height={80} alt="Logo"/>
                            <div className="flex flex-col ml-4 text-text">
                                <h1 className="text-4xl">Greenhouse Tutoring</h1>
                                <h3 className="text-xl">An atmosphere for growth</h3>
                            </div>
                        </div></a>
                        <ButtonGroup variant="text" ripple={false}>
                            <Button className="text-text text-xl"><a href='/about'>About</a></Button>
                            <Button className="text-text text-xl"><a href='/schedule'>Schedule</a></Button>
                            <Button className="text-text text-xl"><a>Contact</a></Button>
                            <Button className="text-text text-xl"><a>Links</a></Button>
                        </ButtonGroup>
                        {/* <ul className="gap-x-6 text-2xl flex flex-row">
                            <li><a href="/about"><button className="inline appearance-none bg-background text-text p-2 rounded-md border-2 hover:bg-accent hover:text-3xl hover:p-2 active:bg-button">About</button></a></li>
                            <li><a href="/schedule"><button className="inline appearance-none bg-background text-text p-2 rounded-md border-2 hover:bg-accent hover:text-3xl hover:p-2 active:bg-button">Schedule</button></a></li>
                            <li><a href="/"><button className="inline appearance-none bg-background text-text p-2 rounded-md border-2 hover:bg-accent hover:text-3xl hover:p-2 active:bg-button">Contact</button></a></li>
                            <li><a href="/"><button className="inline appearance-none bg-background text-text p-2 rounded-md border-2 hover:bg-accent hover:text-3xl hover:p-2 active:bg-button">Links</button></a></li>

                        </ul> */}
                    </div>
                </div>
            </div>
        </>
    );
}