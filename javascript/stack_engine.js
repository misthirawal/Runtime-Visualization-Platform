function push_stack(function_name)
{
    runtime_state.stack.push(function_name);
    render_stack();
}
function pop_stack()
{
    runtime_state.stack.pop();
    render_stack();
}