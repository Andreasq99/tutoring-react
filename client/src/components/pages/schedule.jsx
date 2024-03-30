

var columns = [
    {key:"sun", label:"Sunday"},
    {key:"mon", label:"Monday"},
    {key:"tue", label:"Tuesday"},
    {key:"wed", label:"Wednesday"},
    {key:"thur", label:"Thursday"},
    {key:"fri", label:"Friday"},
    {key:"sat", label:"Saturday"}
];

function permuteColumns(arr,today){
    for(let i=0; i<today; i++){
        const cur = arr.splice(0,1)[0];
        arr.push(cur);
    }
    return arr;
}

const date = new Date();
const day = date.getDay();
columns = permuteColumns(columns,day);

var hours = (hour)=>{
    const time = hour<=12 ? `${hour} am` : `${hour-12} pm`;
    var result = {key:time};
    columns.map((day)=>{result[day.key] = time});
    return result;
}

var rows = [];

for (let i=6; i<= 20; i++){
    rows.push(hours(i));
}


export default function Schedule(){
    return(
        <div className="w-full flex flex-col content-center justify-center p-4">
            <div className="w-4/5 rounded-lg border-2 text-xl bg-accent-400 text-text m-2">
                <div className="text-2xl w-full bg-gradient-to-b from-header to-accent-400 h-12 pt-1 pl-2 rounded-t-md">
                    Hours
                </div>
                <div className="p-2 pt-0">
                    I tutor between the hours of 10 am and 6 pm. 
                </div>
            </div>
            <div className="w-4/5 rounded-lg border-2 text-xl bg-accent-400 text-text m-2">
                <div className="text-2xl w-full bg-gradient-to-b from-header to-accent-400 h-12 pt-1 pl-2 rounded-t-md">
                    Note!
                </div>
                <div className="p-2 pt-0">
                    Schedule changes within 24 hours of a session are subject to additional fees. <br/>
                    Cancelled sessions within 24 hours will be billed at full price, unless rescheduled. <br/>
                    Newly scheduled sessions within 24 hours incur an additional 20% charge. 
                </div>
            </div>
        </div>
    );
}