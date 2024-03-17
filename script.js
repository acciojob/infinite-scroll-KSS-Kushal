//your code here!

const container = document.getElementById("infi-list");
let count = 11;
for (let i = 1; i <= 10; i++) {
	const list = document.createElement("li");
	list.textContent = `Item ${i}`;
	container.appendChild(list);
}
container.onscroll = () => {
	 if ( 
        Math.ceil(container.clientHeight  
            + container.scrollTop) >= 
            container.scrollHeight 
    ) {
		 const list = document.createElement("li");
	list.textContent = `Item ${count}`;
	container.appendChild(list);
	list.textContent = `Item ${count++}`;
	container.appendChild(list);
	}
}