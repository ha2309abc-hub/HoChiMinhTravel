const subCategories = {
    "entertainment": [
        { value: "nightlife", text: "Nightlife" },
        { value: "theaters", text: "Theaters & Performing Arts" },
        { value: "malls", text: "Shopping malls" }
    ],
    "sightseeing": [
        { value: "sites", text: "Histocrical Sites & Attractions" },
        { value: "museums", text: "Museum & Galleries" },
        { value: "parks", text: "Parks" }
    ],
    "food-drink": [
        { value: "local-food", text: "Local Cuisine & Street Food" },
        { value: "inter-dining", text: "International Dining" },
        { value: "cafes", text: "Cafes & Desserts" }
    ]
};

const places = [
     {
        name: "",
        district: "1",
        form: "entertainment",
        subCat: "nightlife",
        image: ""
    },
    {
        name: "",
        district: "1",
        form: "entertainment",
        subCat: "nightlife",
        image: ""
    },
    {
        name: "",
        district: "1",
        form: "entertainment",
        subCat: "nightlife",
        image: ""
    },
    {
        name: "",
        district: "1",
        form: "entertainment",
        subCat: "theaters",
        image: ""
    },
     {
        name: "",
        district: "1",
        form: "entertainment",
        subCat: "theaters",
        image: ""
    },
     {
        name: "",
        district: "1",
        form: "entertainment",
        subCat: "theaters",
        image: ""
    },
     {
        name: "",
        district: "1",
        form: "entertainment",
        subCat: "malls",
        image: ""
    },
     {
        name: "",
        district: "1",
        form: "entertainment",
        subCat: "malls",
        image: ""
    },
     {
        name: "",
        district: "1",
        form: "entertainment",
        subCat: "malls",
        image: ""
    },

     {
        name: "Bảo tàng Cách mạng Việt Nam",
        district: "1",
        form: "sightseeing",
        subCat: "museums",
        image: ""
    },
     {
        name: "Bảo tàng Cách mạng Việt Nam",
        district: "1",
        form: "sightseeing",
        subCat: "museums",
        image: ""
    },
    {
        name: "Bảo tàng Cách mạng Việt Nam",
        district: "1",
        form: "sightseeing",
        subCat: "museums",
        image: ""
    },
     {
        name: "Bảo tàng Mỹ Thuật Thành phố Hồ Chí Minh",
        district: "1",
        form: "sightseeing",
        subCat: "museums",
        image: ""
    },
     {
        name: "Bảo tàng Thành phố Hồ Chí Minh",
        district: "1",
        form: "sightseeing",
        subCat: "museums",
        image: ""
    },

     {
        name: "Dinh Độc Lập",
        district: "1",
        form: "sightseeing",
        subCat: "sites",
        image: "./images/IndependencePalace.jpg"
    },
     {
        name: "Nhà Thờ Đức Bà",
        district: "1",
        form: "sightseeing",
        subCat: "sites",
        image: "./images/SaigonNotre-DameCathedral.jpg"
    },
     {
        name: "Bến Nhà Rồng",
        district: "1",
        form: "sightseeing",
        subCat: "sites",
        image: "./images/dragonWharf.jpg"
    },

     {
        name: "Thảo Cầm Viên",
        district: "1",
        form: "sightseeing",
        subCat: "parks",
        image: "./images/SaiGonZoo.jpg"
    },
    {
        name: "Công viên Tao Đàn",
        district: "1",
        form: "sightseeing",
        subCat: "parks",
        image: ""
    },
    {
        name: "Công viên Bến Bạch Đằng",
        district: "1",
        form: "sightseeing",
        subCat: "parks",
        image: ""
    },
    {
        name: "",
        district: "1",
        form: "food-drink",
        subCat: "local-food",
        image: ""
    },
     {
        name: "",
        district: "1",
        form: "food-drink",
        subCat: "local-food",
        image: ""
    },
    {
        name: "",
        district: "1",
        form: "food-drink",
        subCat: "local-food",
        image: ""
    },
     {
        name: "",
        district: "1",
        form: "food-drink",
        subCat: "inter-dining",
        image: ""
    },
     {
        name: "",
        district: "1",
        form: "food-drink",
        subCat: "inter-dining",
        image: ""
    },
     {
        name: "",
        district: "1",
        form: "food-drink",
        subCat: "inter-dining",
        image: ""
    },
     {
        name: "",
        district: "1",
        form: "food-drink",
        subCat: "cafes",
        image: ""
    },
    {
        name: "",
        district: "1",
        form: "food-drink",
        subCat: "cafes",
        image: ""
    },
    {
        name: "",
        district: "1",
        form: "food-drink",
        subCat: "cafes",
        image: ""
    },
]

const form = document.querySelector('#form');
const subCat = document.querySelector('#sub-categories');
const proposal = document.querySelector('.searchByName');
const res=document.querySelector('.result');
const dist=document.querySelector('#district');
res.style.display="none";

form.addEventListener("change", function () {
    const selectedForm = this.value;
    subCat.innerHTML = '<option value="" disabled selected hidden>Specific category</option>';
    if (selectedForm && subCategories[selectedForm]) {
        proposal.style.display = "none";
        res.style.display="flex";
        subCat.disabled = false;
        subCategories[selectedForm].forEach(sub => {
            const option = document.createElement("option");
            option.value = sub.value;
            option.textContent = sub.text;
            subCat.appendChild(option);
        });
    }
    else {
        subCat.disabled = true;
    }
    // console.log(district,formSelect, subCatSelect);
}
);




