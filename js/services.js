class Tab {
    constructor (link){
        this.link = link;
        this.data = this.link.dataset.tab;
        this.itemElement = document.querySelector(`.tab-item[data-tab="${this.data}"]`);
        this.tabItem = new TabItem(this.itemElement);
        this.link.addEventListener("click", () => this.select());
        
    }

    select(){
        const links = document.querySelectorAll('.tab-link');

        Array.from(links).forEach((tabsLinks) => {
            tabsLinks.classList.remove(".tab-selected");
        });

        this.link.classList.add(".tab-selected");

        this.tabItem.select();

        console.log("it's working!");
    }
}

class TabItem {
    constructor(element){
        this.element = element;
    }

    select(){
        this.items = Array.from(document.querySelectorAll(".tab-items"));
        this.items.forEach(item => item.classList.remove('.tab-selected'));
        this.element.classList.add(".tab-selected");
    }
}

let links = document.querySelectorAll(".tab-link");
links = Array.from(links).map(link => new Tab(link));

links[0].select();