function render_stack()
{
    let stack_area =
    document.getElementById("stack_visualization");
    // clear old stack
    stack_area.innerHTML = "";
    // create stack frames
    runtime_state.stack.forEach(function(frame)
    {
        let div =
        document.createElement("div");
        div.classList.add("stack_frame");
        div.innerText = frame;
        stack_area.appendChild(div);
    });
}