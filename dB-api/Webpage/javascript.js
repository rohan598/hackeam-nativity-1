let Data={};

$(document).ready(function(){
    // $.ajax({url:'/getdata',success: function(data){
    //     console.log(data);
    //     Data = data;
    //     console.log(Data);
    //     setWebpage();
    // }});
    Data = {
        'societyname' : 'CSI',
        'background' : 'https://preview.ibb.co/fzdaAn/bg.jpg',
        'logo' : 'https://image.ibb.co/meXkAn/csi.png',
        'name' : 'Code n play',
        'from' : '2018-02-26',
        'to' : '2018-02-28',
        'hashtags' : '#codenplay #win #prizes #2018 #comeall',
        'register' : 'www.google.co.in',
        'description' : `This will include text about the event like rules or motive. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the       release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        'events' : [
            {
                'name' : 'Start',
                'venue' : 'Here',
                'from' : '8:30',
                'to' : '9:30',
                'description' : 'starting the event'
            },
            {
                'name' : 'Mid',
                'venue' : 'There',
                'from' : '1:30',
                'to' : '2:00',
                'description' : 'doing event'
            },
            {
                'name' : 'End',
                'venue' : 'Where',
                'from' : '3:00',
                'to' : '4:00',
                'description' : 'end of event'
            }
        ],
        'speaker' : [
            {
                'avatar' : 'https://image.ibb.co/dgR9Ln/speaker.jpg',
                'profile' : {
                    'github' : '',
                    'googleplus' : '',
                    'facebook' : '',
                    'twitter' : '',
                    'linkedin' : '',
                    'instagram' : '',
                },
                'name' : 'You know me',
                'designation' : 'this too',
                'description' : `Chris is currently a VP at the Linux Foundation focused on developer relations and running the Open Container
                Initiative (OCI) / Cloud Native Computing Foundation (CNCF). Furthermore, he's a partner at Capital Factory where he focuses on mentoring,
                advising and investing in open source and infrastructure focused startups.`
            },
            {
                'avatar' : '',
                'profile' : {
                    'github' : '',
                    'googleplus' : '',
                    'facebook' : '',
                    'twitter' : '',
                    'linkedin' : '',
                    'instagram' : '',
                },
                'name' : 'Michael',
                'designation' : 'manager',
                'description' : `Chris is currently a VP at the Linux Foundation focused on developer relations and running the Open Container
                Initiative (OCI) / Cloud Native Computing Foundation (CNCF). Furthermore, he's a partner at Capital Factory where he focuses on mentoring,
                advising and investing in open source and infrastructure focused startups.`
            },
            {
                'avatar' : 'https://image.ibb.co/dgR9Ln/speaker.jpg',
                'profile' : {
                    'github' : '',
                    'googleplus' : '',
                    'facebook' : '',
                    'twitter' : '',
                    'linkedin' : '',
                    'instagram' : ''
                },
                'name' : 'Chris Yao',
                'designation' : 'director',
                'description' : `Chris is currently a VP at the Linux Foundation focused on developer relations and running the Open Container
                Initiative (OCI) / Cloud Native Computing Foundation (CNCF). Furthermore, he's a partner at Capital Factory where he focuses on mentoring,
                advising and investing in open source and infrastructure focused startups.`
            }
        ],
        'sponsors' : [
            {
                'logo' : 'https://image.ibb.co/dgR9Ln/speaker.jpg',
                'link' : ''
            },
            {
                'logo' : 'https://image.ibb.co/dgR9Ln/speaker.jpg',
                'link' : ''
            },
            {
                'logo' : 'https://image.ibb.co/dgR9Ln/speaker.jpg',
                'link' : ''
            }
        ],
        'address' : 'Azad Hind Fauz Marg, Sector 3, Dwarka, New Delhi, Delhi 110078',
        'phone1' : '7451268930',
        'phone2' : '4126895320',
        'profile' : {
            'github' : '',
            'googleplus' : '',
            'facebook' : '',
            'twitter' : '',
            'linkedin' : '',
            'instagram' : ''
        }
    }
    setWebpage();
});

function setWebpage(){
    document.title = Data.societyname;
    $('.bg').attr({'src':Data.background});
    $('.logo').attr({'src':Data.logo});
    $('.eventname').html(Data.name);
    var part1 = Data.from;
    var part2 = Data.to;
    if(part1==='' || part2===''){
        if(part1==='') $('.eventdate').html(part2);
        else $('.eventdate').html(part1);
    }
    else $('.eventdate').html(part1 + " to " + part2);
    $('.eventquote').html(Data.hashtags);
    $('.register').attr({'onclick':`window.location='${Data.register}'`});
    $('.abouttext').html(Data.description);
    for(let i=0; i<Data.events.length; i++){
        const temp = `<li class="container mt-5 pt-2 pb-2 mb-5 d-flex eventschedule">
                            <div class="container-fluid p-0 dot">
                            <i class="fa fa-circle" style="color: #5bc0de" aria-hidden="true"></i>
                            </div>
                            <div class="container-fluid p-2 listitem">
                                <p class="h4 mb-2 tilehead">${Data.events[i].name}</p>
                                <p class="h5 subhead mb-3">${Data.events[i].venue}</p>
                                <p class="h5 subhead mb-3">${Data.events[i].from} - ${Data.events[i].to}</p>
                                <p class="h6 text">${Data.events[i].description}</p>
                            </div>
                        </li>`;
        $('#timelist').append(temp);
    }
    const t=`<script type="text/javascript">
                    sr.reveal('.listitem',{duration:1000, origin:'top', distance:'100%'});
                    sr.reveal('.dot', {duration:1000,origin:'left',distance:'100%'});
                </script>`;
    $('#timelist').append(t);
    for(let i=0; i<Data.speaker.length; i++){
        const temp = `<div class="container mt-3 mb-3 pt-1 pb-1 speaker text-center">
                        <div class="speakerimg speakerimg${i}" style="position: relative;">
                            <img src="${Data.speaker[i].avatar}" style="height: 270px; width: 270px;" style="position: relative;" onError="this.onerror=null; this.src='https://image.ibb.co/gXgqbS/placeholder_avatar.png';" />
                            <div class="container-fluid speakeroverlay speakeroverlay${i}">
                                <ul class="speakerlinks float-center" style="padding:0; margin:auto">
                                    <li>
                                        <a href="${Data.speaker[i].profile.github}" target="_blank"><i class="fab fa-github" style="color: darkgray;" aria-hidden="true"></i></a>
                                    </li>
                                    <li>
                                        <a href="${Data.speaker[i].profile.googleplus}" target="_blank"><i class="fab fa-google-plus-g" style="color: red;" aria-hidden="true"></i></a>
                                    </li>
                                    <li>
                                        <a href="${Data.speaker[i].profile.facebook}" target="_blank"><i class="fab fa-facebook" style="color: #3b5998;" aria-hidden="true"></i></a>
                                    </li>
                                    <li>
                                        <a href="${Data.speaker[i].profile.twitter}" target="_blank"><i class="fab fa-twitter" style="color: #1da1f2;" aria-hidden="true"></i></a>
                                    </li>
                                    <li>
                                        <a href="${Data.speaker[i].profile.linkedin}" target="_blank"><i class="fab fa-linkedin-in" style="color: darkblue;" aria-hidden="true"></i></a>
                                    </li>
                                    <li>
                                        <a href="${Data.speaker[i].profile.instagram}" target="_blank"><i class="fab fa-instagram" style="color: red;" aria-hidden="true"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <script type="text/javascript">
                            $('.speakerimg'+${i}).mouseenter(function(){
                                    $('.speakeroverlay'+${i}).slideDown(300);
                                })
                                .mouseleave(function(){
                                    $('.speakeroverlay'+${i}).slideUp(300);
                                });
                            sr.reveal('.speaker', {duration:1000,origin:'left',distance:'100%'});
                        </script>
                        <div class="container-fluid speakerinfo">
                            <div class="container speakername">${Data.speaker[i].name}</div>
                            <p class="container speakerstatus">${Data.speaker[i].designation}</p>
                            <p class="container-fluid speakerabout">${Data.speaker[i].description}</p>
                        </div>
                    </div>`;
        $('#speakers').append(temp);
    }
    for(let i=0; i<Data.sponsors.length; i++){
        const temp = `<div class="container sponsor mt-2 mb-2 pt-2 pb-2">
                        <a href="${Data.sponsors[i].link}">
                            <img src="${Data.sponsors[i].logo}" class="sponsorimg">
                        </a>
                    </div>
                    <script type='text/javascript'>
                        sr.reveal('.sponsor', {duration:1000,distance:'100%',scale:'0.5'});
                    </script>`;
        $('.sponsorslist').append(temp);
    }
    $('.address').html(Data.address);
    $('.phone').html(`Contact No. - ${Data.phone1}, ${Data.phone2}`);
    $('.gitlink').attr({'href':`${Data.profile.github}`});
    $('.googlelink').attr({'href':`${Data.profile.googleplus}`});
    $('.fblink').attr({'href':`${Data.profile.facebook}`});
    $('.twitterlink').attr({'href':`${Data.profile.twitter}`});
    $('.lilink').attr({'href':`${Data.profile.linkedin}`});
    $('.instalink').attr({'href':`${Data.profile.instagram}`});
}
