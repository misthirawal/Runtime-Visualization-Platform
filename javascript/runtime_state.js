let runtime_state={
    ram: localStorage.getItem("ram")||8,
    stack: [],
    heap: [],
    timeline: [],
    console_output:[]
};