const subCategories = {
    "entertainment": [
        { value: "nightlife", text: "Nightlife" },
        { value: "theaters", text: "Theaters & Performing Arts" },
        { value: "malls", text: "Shopping malls" }
    ],
    "sightseeing": [
        { value: "sites", text: "Historical Sites & Attractions" },
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
        name: "Phố đi bộ Bùi Viện",
        district: "1",
        form: "entertainment",
        subCat: "nightlife",
        image: "./images/bui_vien_walkingstreet.png"
    },
    {
        name: "Hẻm bia Lost in Hong Kong",
        district: "1",
        form: "entertainment",
        subCat: "nightlife",
        image: "./images/hem_bia.jpg"
    },
    {
        name: "Chill Skybar",
        district: "1",
        form: "entertainment",
        subCat: "nightlife",
        image: "./images/chill_skybar.jpg"
    },
    {
        name: "CGV Vincom Đồng Khởi",
        district: "1",
        form: "entertainment",
        subCat: "theaters",
        image: "./images/cgv_dk.jpg"
    },
    {
        name: "Nhà hát Thành phố",
        district: "1",
        form: "entertainment",
        subCat: "theaters",
        image: "./images/nha_hat_tp.jpg"
    },
    {
        name: "Nhà hát Bến Thành",
        district: "1",
        form: "entertainment",
        subCat: "theaters",
        image: "./images/nha_hat_bt.png"
    },
    {
        name: "Takashimaya Saigon Center",
        district: "1",
        form: "entertainment",
        subCat: "malls",
        image: "./images/takashimaya.jpg"
    },
    {
        name: "Bitexco",
        district: "1",
        form: "entertainment",
        subCat: "malls",
        image: "./images/bitexco.png"
    },
    {
        name: "Vincom Đồng Khởi",
        district: "1",
        form: "entertainment",
        subCat: "malls",
        image: "./images/vincom_dk.png"
    },

    {
        name: "Bảo tàng Lịch sử Việt Nam",
        district: "1",
        form: "sightseeing",
        subCat: "museums",
        image: "./images/history_museum.jpg"
    },
    {
        name: "Réhahn Gallery",
        district: "1",
        form: "sightseeing",
        subCat: "museums",
        image: "./images/rehahn.jpg"
    },
    {
        name: "Bảo tàng Chiến dịch Hồ Chí Minh",
        district: "1",
        form: "sightseeing",
        subCat: "museums",
        image: "./images/bt_chien_dich.png"
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
        image: "./images/tao-dan-park.jpg"
    },
    {
        name: "Công viên Bến Bạch Đằng",
        district: "1",
        form: "sightseeing",
        subCat: "parks",
        image: "images/bach_dang_park.jpg"
    },
    {
        name: "Lẩu cua Khôi",
        district: "1",
        form: "food-drink",
        subCat: "local-food",
        image: "images/BenThanhMarket.jpg"
    },
    {
        name: " Ốc Đào",
        district: "1",
        form: "food-drink",
        subCat: "local-food",
        image: "images/oc_dao.jpg"
    },
    {
        name: "Hẻm ăn vặt Hai Bà Trưng",
        district: "1",
        form: "food-drink",
        subCat: "local-food",
        image: "images/hem-an-vat.jpg"
    },
    {
        name: "Kyung Bok Gung",
        district: "1",
        form: "food-drink",
        subCat: "inter-dining",
        image: "images/ko-food.jpg"
    },
    {
        name: "The Log",
        district: "1",
        form: "food-drink",
        subCat: "inter-dining",
        image: "images/buffet.jpg"
    },
    {
        name: "Crystal Jade Palace",
        district: "1",
        form: "food-drink",
        subCat: "inter-dining",
        image: "images/dimsum.jpg"
    },
    {
        name: "Soo Kafe",
        district: "1",
        form: "food-drink",
        subCat: "cafes",
        image: "images/soo_kafe.webp"
    },
    {
        name: "Cà Rề cafe",
        district: "1",
        form: "food-drink",
        subCat: "cafes",
        image: "images/ca-re-cafe.jpg"
    },
    {
        name: "Bibli Library Cafe",
        district: "1",
        form: "food-drink",
        subCat: "cafes",
        image: "images/bibli-cafe.jpg"
    },
];

const dist = document.querySelector('#district');
const form = document.querySelector('#form');
const subCategory = document.querySelector('#sub-category');
const proposal = document.querySelector('.searchByName');
const res = document.querySelector('.result');

res.style.display = "none";

function randomPlaces(list,n){
    const newList=[...list].sort(()=>Math.random()-0.5);
    return newList.slice(0,n);
}
function filterPlaces() {
    const selectedDist = dist.value;
    const selectedForm = form.value;
    const selectedSubCategory = subCategory.value;

    const filterRes = places.filter((place) => {
        const matchDist = !selectedDist || selectedDist == place.district;
        const matchForm = !selectedForm || selectedForm == place.form;
        const matchSubCategory = !selectedSubCategory || selectedSubCategory == place.subCat;
        return matchDist && matchForm && matchSubCategory;
    });

    if (filterRes.length > 0) {
        proposal.style.display = "none";
        res.style.display = "flex";
        const col1 = res.querySelector('.col1');
        const col2 = res.querySelector('.col2');
        const col3 = res.querySelector('.col3');
        const cols = [col1, col2, col3];
        cols.forEach(col => {
        if (col) {
            const img = col.querySelector('img');
            const p = col.querySelector('p');
            if (img) img.src = "";
            if (p) p.textContent = "";
            col.style.display = "none";
        }
    });
    const randPlaces=randomPlaces(filterRes,3);
        randPlaces.forEach((place, index) => {
            if (cols[index]) {
                const col=cols[index];
                col.style.display = "flex";
                const imgRes = col.querySelector('img');
                const pRes = col.querySelector('p');
                if(imgRes) imgRes.src = place.image;
                if(pRes) pRes.textContent = place.name;
            }
        });
    }
    else {
        res.style.display = "none";
        proposal.style.display = "flex";
    }
};

const search_bar=document.querySelector('#place_name');
function searchPlace(){
    const searchPlace=search_bar.value.toLowerCase().trim();
    if(searchPlace===""){
        res.style.display = "none";
        proposal.style.display = "flex";
        return;
    }
    const finded=places.filter((place)=>{
        return place.name.toLowerCase().includes(searchPlace);
    });
    
    if(finded.length>0){
        res.style.display = "flex";
        proposal.style.display = "none";
        res.innerHTML="";
        finded.forEach((place)=>{
            const newdiv=document.createElement('div');
            newdiv.className='resList';
            const imgRes=document.createElement('img');
            imgRes.src=place.image;
            const pRes=document.createElement('p');
            pRes.textContent=place.name;
            newdiv.appendChild(imgRes);
            newdiv.appendChild(pRes);
            res.appendChild(newdiv);
        })
    }
    else{
        res.style.display = "flex";
        proposal.style.display = "none";
        res.innerHTML="<p>.</p>";
    };
};
dist.addEventListener("change", function () {
    filterPlaces();
});
form.addEventListener("change", function () {
    const selectedForm = this.value;
    subCategory.innerHTML = '<option value="" disabled selected hidden>Specific category</option>';
    if (selectedForm && subCategories[selectedForm]) {
        subCategory.disabled = false;
        subCategories[selectedForm].forEach((sub) => {
            const option = document.createElement("option");
            option.value = sub.value;
            option.textContent = sub.text;
            subCategory.appendChild(option);
        })
    }
    else subCategory.disabled = true;
    filterPlaces();
});
subCategory.addEventListener("change", function () {
    filterPlaces();
});
search_bar.addEventListener("input",function(){
    searchPlace();
})
