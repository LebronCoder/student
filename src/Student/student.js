let users = [{
    number: "11921380131",
    name: "蒋锡培",
    gender: "男",
    college: "人工智能学院",
    major: "软件工程",
    grade: "2019",
    class: "1",
    age: "22"
},{
    number: "11921380132",
    name: "向文波",
    gender: "女",
    college: "人工智能学院",
    major: "软件工程",
    grade: "2019",
    class: "1",
    age: "22"
},{
    number: "11921380133",
    name: "牛根生",
    gender: "男",
    college: "人工智能学院",
    major: "软件工程",
    grade: "2019",
    class: "1",
    age: "22"
},{
    number: "11921380134",
    name: "于清教",
    gender: "女",
    college: "人工智能学院",
    major: "软件工程",
    grade: "2019",
    class: "1",
    age: "22"
},{
    number: "11921380135",
    name: "谢清海",
    gender: "男",
    college: "人工智能学院",
    major: "软件工程",
    grade: "2019",
    class: "1",
    age: "22"
},{
    number: "11921380136",
    name: "刘旗辉",
    gender: "女",
    college: "人工智能学院",
    major: "软件工程",
    grade: "2019",
    class: "1",
    age: "22"
},{
    number: "11921380137",
    name: "陈达夫",
    gender: "男",
    college: "人工智能学院",
    major: "软件工程",
    grade: "2019",
    class: "1",
    age: "22"
},{
    number: "11921380138",
    name: "叶茂中",
    gender: "女",
    college: "人工智能学院",
    major: "软件工程",
    grade: "2019",
    class: "1",
    age: "22"
},{
    number: "11921380139",
    name: "李士福",
    gender: "男",
    college: "人工智能学院",
    major: "软件工程",
    grade: "2019",
    class: "1",
    age: "22"
},{
    number: "11921380110",
    name: "王进生",
    gender: "女",
    college: "人工智能学院",
    major: "软件工程",
    grade: "2019",
    class: "1",
    age: "22"
},{
    number: "11921380111",
    name: "任志强",
    gender: "男",
    college: "人工智能学院",
    major: "软件工程",
    grade: "2019",
    class: "1",
    age: "22"
},{
    number: "11921380112",
    name: "孙虹钢",
    gender: "女",
    college: "人工智能学院",
    major: "软件工程",
    grade: "2019",
    class: "1",
    age: "22"
},{
    number: "11921380113",
    name: " 宋新宇",
    gender: "男",
    college: "人工智能学院",
    major: "软件工程",
    grade: "2019",
    class: "1",
    age: "22"
},{
    number: "11921380114",
    name: "翁向东",
    gender: "女",
    college: "人工智能学院",
    major: "软件工程",
    grade: "2019",
    class: "1",
    age: "22"
}];
let index=0;
let page = 1;

window.onload = function (){
    fill();
};

// 实现渲染页面将内容放置在tbody中
function fill(){
    let tbody = document.getElementById("tbody")
    if(page>1){
        index = (page -1)*10;
    }else{
        index = 0;
    }
    for (let i=index ; i<index+10 && i < users.length;i ++){
        show_result(i,tbody);
    }
}

// 将数据插入到表格中
function show_result(a,table){
    let newRow = table.insertRow();
    let cellID = newRow.insertCell();
    let note = newRow.insertCell();
    let cellNumber = newRow.insertCell();
    let cellName = newRow.insertCell();
    let cellGender =  newRow.insertCell();
    let cellCollege = newRow.insertCell();
    let cellMajor = newRow.insertCell();
    let cellGrade = newRow.insertCell();
    let cellClass = newRow.insertCell();
    let cellAge = newRow.insertCell();
    let cellOperate = newRow.insertCell();

    cellID.innerHTML = "<input type='checkbox' name='checkbox' onclick='checkBox'>" ;
    note.innerHTML = Number(a)+1;
    cellNumber.innerHTML = users[a].number;
    cellName.innerHTML = users[a].name;
    cellGender.innerHTML = users[a].gender;
    cellCollege.innerHTML = users[a].college;
    cellMajor.innerHTML = users[a].major;
    cellGrade.innerHTML = users[a].grade;
    cellClass.innerHTML = users[a].class;
    cellAge.innerHTML = users[a].age;
    cellOperate.innerHTML = "<input type='button' value='查询' onclick='Search(this)'>"+"<input type='button' value='修改' onclick='Modification(this)'>";
}


let all = document.getElementById("all");
let mychk = document.getElementsByName("checkbox");

function All(){
    if (all.checked === true) {
        for (let i = 0; i < mychk.length; i++) {
            mychk[i].checked = true;
        }

        mychk.chcked = true;
    } else {
        for (let i = 0; i < mychk.length; i++) {
            mychk[i].checked = false;
        }
    }
}

function checkBox(){
    mychk.chcked = false;
    for(let i =0 ;i < mychk.length; i++){
        if(mychk[i].checked === false){
            all.checked = false;
            break;
        }
        else{
            if(mychk[i].checked===true){
                all.checked = true;
            }
        }
    }
}


// 删除功能
function Delete() {
    let table = document.getElementById("tbody");
    let temp = [];
    let CheckBox = document.getElementsByName("checkbox");
    for (let a =0,i =0;a < CheckBox.length;a++,i++){
        if (CheckBox[a].checked){
            temp.push(a);
        }else {
        }
    }
    for (let a = 0;a < temp.length; a++){
        if (a === 0){
            users.splice(temp[a],1);
        }
        else{
            users.splice(temp[a]-a,1);
        }
    }
    // show_result(moduleCheckBox.length,table);
    table.innerHTML = '';
    fill();
    hide();
}

let newAdd = document.getElementById("newAdd");
let modaldivModification = document.getElementById("modification1");
let modaldivSearch = document.getElementById("search");


// 使添加框,查看框，修改框消失
function  Close() {
    modaldivModification.style.display = "none";
    newAdd.style.display = "none";
    modaldivSearch.style.display = "none";
}

function New() {
    console.log(newAdd.style)
    newAdd.style.display="block";
}

function createNew(){
    let number = document.getElementById("number").value;
    let name = document.getElementById("name").value;
    let gender = document.getElementById("gender").value;
    let college = document.getElementById("college").value;
    let major = document.getElementById("major").value;
    let grade = document.getElementById("grade").value;
    let CLass = document.getElementById("class").value;
    let age = document.getElementById("age").value;
    let table = document.getElementById("tbody");
    let checkBox = document.getElementsByName("checkbox")
    users.splice(checkBox.length,0,{
        number: number,
        name: name,
        gender: gender,
        college: college,
        major: major,
        grade: grade,
        class: CLass ,
        age: age
    })

    table.innerHTML =' ';
    fill();
    hide();
}


function Search(button){
    modaldivSearch.style.display = "block";
    let row = button.parentNode.parentNode;
    let number = document.getElementsByClassName("number");
    let name = document.getElementsByClassName("name");
    let sex = document.getElementsByClassName("gender");
    let college = document.getElementsByClassName("college");
    let major = document.getElementsByClassName("major");
    let grade = document.getElementsByClassName("grade");
    let studentClass = document.getElementsByClassName("class");
    let age = document.getElementsByClassName("age");
    let array = Array.from(row.childNodes);
    number[1].value = array[1].innerText;
    name[1].value = array[2].innerText;
    sex[1].value = array[3].innerText;
    college[1].value = array[4].innerText;
    major[1].value = array[5].innerText;
    grade[1].value = array[6].innerText;
    studentClass[1].value = array[7].innerText;
    age[1].value = array[8].innerText;
}


// 对表格信息进行修改

let changePerson;//需要改变的人的序号

function Modification(button){

    modaldivModification.style.display = "block";
    let row = button.parentNode.parentNode;
    let number = document.getElementsByClassName("number1");
    let name = document.getElementsByClassName("name1");
    let gender = document.getElementsByClassName("gender1");
    let college = document.getElementsByClassName("college1");
    let major = document.getElementsByClassName("major1");
    let grade = document.getElementsByClassName("grade1");
    let studentClass = document.getElementsByClassName("class1")
    let age = document.getElementsByClassName("age1");
    let array = Array.from(row.childNodes);
    //array保存对应每个对象里面元素的属性
    changePerson = array[1].innerHTML;
    number[0].value = array[2].innerText;
    // alert(number[0].value);
    name[0].value = array[3].innerText;
    // alert(name[0].value);
    gender[0].value = array[4].innerText;
    college[0].value = array[5].innerText;
    major[0].value = array[6].innerText;
    grade[0].value = array[7].innerText;
    studentClass[0].value = array[8].innerText;
    age[0].value = array[9].innerText;

}

function Alter(){
    console.log("cc",changePerson);
    let table = document.getElementById("tbody");
    users.splice(changePerson-1,1,{
        number: document.getElementById("number1").value,
        name: document.getElementById("name1").value,
        gender: document.getElementById("gender1").value,
        college: document.getElementById("college1").value,
        major: document.getElementById("major1").value,
        grade:document.getElementById("grade1").value,
        class: document.getElementById("class1").value,
        age:document.getElementById("age1").value
    })
    console.log(users)
    table.innerHTML = '';
    fill();//渲染页面
    hide();

}

// 应该展示的数量
function next(){

    if(page+1> Math.ceil(users.length/10))
        alert("已经是最后一页");
    else{
        page++;
        document.getElementById("tbody").innerHTML ='';
        fill();
    }
}

function pre(){
    console.log(page)
    if(page-1===0){
        alert("不能向上翻页了");
    }
    else{
        page --;
        document.getElementById("tbody").innerHTML ='';
        fill();
    }
}

function hide(){
    document.getElementById("modification1").style.display='none';
}


