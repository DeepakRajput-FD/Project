
        //Data of cards
      
      let videoarr=['Practical Life Lesson. छत्रपति शिवाजी महाराज.mp4','Shubh - Cheques (Official Music Video).mp4','295 (Official Audio) _ Sidhu Moose Wala _ The Kidd _ Moosetape.mp4','Agam - Kaalbhairav Ashtakam _ _POWERFUL_ MUSIC TO REMOVE DARK ENERGY _ Shiv _ Mahakal.mp4','Aarambh_hai.mp4','Keejo_kesari.mp4','Shoorveer3.mp4','We Rollin (Official Audio) - Shubh.mp4','Jagg_jiteya.mp4','Babam Bam _ Paradox _ Hustle 2.0.mp4','_Raftaarein_ Song With Lyrics _ Ra.One _ Shahrukh Khan, Kareena Kapoor.mp4'];
      
      let vname=['Practical Life Lesson','Shubh - Cheques (Video)','295 (Audio) _Sidhu  ','Agam - Kaalbhairav','Aarambh_hai','Keejo_kesari','Shoorveer3','We Rollin (Audio) - Shubh','Jagg_jiteya','Babam Bam _ Paradox','_Raftaarein_ Ra.One _ ']

     let channelname=['hum jeetenge','shubh','Siddhu moosewala','Shiv _ Mahakal','kesari','Trouper Records','Shubh','Zee Music Company','Paradox','T-series','zee Music Company']

        let  ChannelView=['265k 1year ago','365k year ago','3 year ago','6 month ago','9 month ago','1 Year ago','2 Year ago','3 Year ago','2 Year ago','2 Year ago','7 year ago']

    function hii()
     {
        
         let count=0;
        videoarr.forEach(element =>
         {
             let card_wrapper=document.getElementById('card_wrapper');
             
             let cards=document.createElement('div');
             let card1=`<div class='all_cards'>
                <video src="${element}" controls ></video>
                <p>${vname[count]}</p>
                <p>${channelname[count]}</p>
                <p>${ChannelView[count]}</p>
                </div>`;
                count++;
                //  card1.className='main';
                cards.innerHTML=card1;
                card_wrapper.appendChild(cards);                
            });
    }

    hii();

    let button_bar=document.getElementById('button_bar');

    button_bar.addEventListener('click',function ()
     {

        let main_menu=document.getElementsByClassName('main_menu');
        main_menu[0].style.display='flex';

        let wrapper1=document.getElementsByClassName('wrapper1');
        wrapper1[0].style.width='10%';

        let wrapper2=document.getElementsByClassName('wrapper2');
        wrapper2[0].style.width='90%';

    })

    let input1=document.getElementById('input1');

    input1.addEventListener('click',function ()
     {
        input1.style.color='green';
    })

    document.addEventListener('scroll',function ()
     {
        let scroll=window.scrollY;
        if (scroll>700)
         {
            hii();
        }    
    });
 

