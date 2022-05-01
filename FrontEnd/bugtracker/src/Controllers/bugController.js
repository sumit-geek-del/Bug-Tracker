import bugModel from '../Models/bugModel';

export function retrieveBugs(){
    let data = [];

    data.push(new bugModel({
        _id:1232374,
        name:'Crash on Load',
        details:'Crashes after 3 Seconds',
        steps:'Open Appliaction and it will crash',
        version:"V2.0",
        assigned:"Ryan Beasely",
        creator:"Sumit Kumar",
        priority:1,
        time:'23:38'
    }))
    data.push(new bugModel({
        _id:1232374,
        name:'Wont Load',
        details:'Crashes after 3 Seconds',
        steps:'Open Appliaction and it will crash',
        version:"V2.0",
        assigned:"Ryan Beasely",
        creator:"Sumit Kumar",
        priority:3,
        time:'23:38'
    }))
    
    let sorted = data.sort((a,b)=>{return a.priority-b.priority});
    return sorted;
}