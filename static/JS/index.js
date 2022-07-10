let input = document.querySelector("textarea");
let run = document.querySelector("button");
let output = document.querySelector("pre");

function main()
{
    run.addEventListener("click", function() {
        output.innerHTML = input.value;
    })
}

export {main}