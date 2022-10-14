var $=function(id){
    return document.getElementById(id);
}

var languages_arr=["HTML CSS","JavaScript ECS5 та неповний ECS6", "PHP", "MySQL", "Python", "C++ для ARDUINO"];
var main_topics=["Мови програмуваня", "Проєкти", "Фреймворки", "Робота з сервером, MySQL та stored procedure", "GIT", "Сертифікати та нагороди"];
var colors=["language_name_blue", "language_name_yellow", "language_name_violet"];
const main_topics_tag="<h4 class='main_topic_elem'>";
var frameworks=["Bootstrap","Tailwind"];
const main_topics_tag_end="</h4>";
const links={"Мій профіль на GitHub":["https://github.com/VigularIgnat"],"Повномаштабні проєкти":["https://atmihnat.com/atm/","https://atmihnat.com/portal/","https://atmihnat.com/myimages.net/", "https://github.com/VigularIgnat/parser", "https://atmihnat.com/puzzle/", "https://www.atmihnat.com/managecafe/"],"Технічні завдання":["https://docs.google.com/document/d/11uRQWD8Vd5-kn_n7MB5GJb1_1gioQMQS8Rr8k3AJcr4/edit","https://docs.google.com/document/d/1BVE8I2zoHhIdiGU_Z4ITIh80-iWwpvAb21W-Jt4UG-4/edits", "https://docs.google.com/document/d/1gqRUWjAGk-b62J6Gtc7ukMu151Y5vLaI6vvOFTKLBgw/edit"]};
const git_text="Працював з GIT панеллю, можу зберігати зміни на репозиторії та завантажувати/видаляти файли локально на репозиторію";
const courses=["Копірайтинг", "SMM", "Web design","IT школа IABS в 2019"];
var mysql_server_text="Створюю та поєдную процедурний та MySQL запити з backend на PHP. Як середовище, використовую PHPmyAdmin";
var experience=["Отримав перемогу в Всеукраїнському конкурсі 'Вантажівка майбутнього 2045'"," Приймав учатсь у Всеукраїнському фестивалі 'FIRST LEGO LEAGA 2016'"," Більшість матеріалів вивчив самостійно з допомогою ментора, на контретних прикладах та задачах"," Всі технічні завдання були написані самостійно "];
var languages_speak=["Українська", "English рівень A2-B1", "Польска A1"]
function create_carousel_elem(num_elems,container_elems, container_buttons){
    for (let i = 0; i < num_elems; i++) {
        var carousel_elem=document.createElement("div");
        var button=document.createElement("button");
        //carousel_elem.innerHTML+=create_links(links);
        carousel_elem.classList.add("carousel_elem");
        button.classList.add("carousel_button");
        button.setAttribute("num", i);
        carousel_elem.setAttribute("num", i);
        
        if (i==0){
            carousel_elem.innerHTML+= create_language_name(languages_arr,main_topics[0], main_topics_tag,main_topics_tag_end);
            carousel_elem.innerHTML+= create_language_name(languages_speak,"Додатково, мови якими я володію", main_topics_tag,main_topics_tag_end);
            button.classList.add("click");
            carousel_elem.classList.add("click_elem");
        }
        if (i==1){
            carousel_elem.innerHTML+=create_links(links, main_topics_tag, main_topics_tag_end);
        }
        if (i==2){

           carousel_elem.innerHTML=create_language_name(frameworks,main_topics[2], main_topics_tag, main_topics_tag_end);
        }
        if (i==3){
            //alert(mysql_server_text);
            carousel_elem.innerHTML=text_parser(mysql_server_text,main_topics[3], main_topics_tag, main_topics_tag_end);
         }
         if (i==4){
            //alert(mysql_server_text);
            carousel_elem.innerHTML=text_parser(git_text, main_topics[4], main_topics_tag, main_topics_tag_end);
         }
         if (i==5){
            //alert(mysql_server_text);
            carousel_elem.innerHTML=create_language_name(experience,main_topics[5], main_topics_tag,main_topics_tag_end);
            carousel_elem.innerHTML+=create_language_name(courses,"Курси, які я закінчив", main_topics_tag,main_topics_tag_end)
         }
        container_elems.appendChild(carousel_elem);
        container_buttons.appendChild(button);
        
    }
    var buttons_arr=container_buttons.getElementsByClassName("carousel_button");
    var elems_arr=container_elems.getElementsByClassName("carousel_elem");
    for (let i = 0; i < buttons_arr.length; i++) {
        buttons_arr[i].onclick=function(){
            var num_button=1*this.getAttribute("num");
            //var num_elem=
            for (let j = 0; j < buttons_arr.length; j++) {
                
                buttons_arr[j].classList.remove('click');
                elems_arr[j].classList.remove("click_elem");
            }
            var num_elem=1*elems_arr[num_button];
            
            elems_arr[i].classList.add("click_elem");
            this.classList.add("click");

        }        
        buttons_arr[i].onmuoseover=function(){
            var num=1*this.getAttribute('num');
            $("info").innerHTML=main_topics[num];
        }
    }
}

create_carousel_elem(main_topics.length,$("carousel_global_container"), $("carousel_buttons_container"));

function create_language_name(languages_arr,main_topic_name, main_topics_tag, main_topics_tag_end){
    var elem=main_topics_tag+main_topic_name+main_topics_tag_end;
    for (let i = 0; i < languages_arr.length; i++) {
        elem+="<div class='language_container'><p class='program_language "+random_color()+"'>"+languages_arr[i]+"</p></div>";
        
        //container.appendChild(elem);
    }
    return elem;
}

function random_color(){
    var num=1*Math.floor(3*Math.random());
    var clas=colors[num];
    return clas;
}

function create_links(links, main_topics_tag, main_topics_tag_end){
    var txt=main_topics_tag+main_topics[1]+main_topics_tag_end;

    for (var key in links) {
        // check if the property/key is defined in the object itself, not in parent
        if (links.hasOwnProperty(key)) {           
            if(links[key].length==1){
                txt+="<p><a class=' program_language "+random_color()+"' href="+links[key]+" target='_blank'>"+key+"</a></p>";
            }
            else{
                txt+="<p class='program_language "+random_color()+"'>"+key+" ";
                for (let j=0; j<links[key].length; j++){
                    txt+="<a class='url_projects' href="+links[key][j]+" target='_blank'>"+links[key][j]+"</a><br>";
                    txt+="</p>";
                }
            }

        }
    }
    return txt;
}

function text_parser(text, main_topic, main_topics_tag, main_topics_tag_end){
    text_out=main_topics_tag+main_topic+main_topics_tag_end;
    text_out+="<p class='program_language "+random_color()+"'>"+text+"</p>";
    return text_out;
}

function copy(text){
    navigator.clipboard.writeText(text)
    .then(() => {
        alert("Скопіювано до буфера обміну");
    })
    .catch(err => {
        console.log('Something went wrong', err);
    });
}


//function redactive_sentenses(full_sentenses)




