// javascript

const postbox = document.querySelector(".postContainer")
const post = document.querySelector("#mainPostinput")
const inputbox = document.querySelector(".input-container")
const postBtn = document.querySelector("#postButton")
let hiddenboxsize = document.querySelector("#hiddenboxsize")
 
function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

postbox.addEventListener("click",function(){
    inputbox.classList.toggle("hidden") })

document.addEventListener('click', function(e){
    if(e.target.dataset.up){
       handleLikeClick(e.target.dataset.up)}
    else if(e.target.dataset.down){
        handleDislikeClick(e.target.dataset.down)}
    else if(e.target.dataset.share){
        handleShareClick(e.target.dataset.share)}
        else if(e.target.dataset.comments){
        handleCommentsClick(e.target.dataset.comments)}
  })
  
  function handleShareClick(postId){
    const targetPostId = data.filter(function(post){
        return post.uuid === postId
    })[0]
        targetPostId.share = !targetPostId.share
    renderfeed() 
}

  function handleCommentsClick(postId){
   document.getElementById(`replies-${postId}`).classList.toggle('hiddenr')
    
}

    function handleDislikeClick(postId){
    const targetPostId = data.filter(function(post){
        return post.uuid === postId
    })[0]
    
    if (targetPostId.downvote){
        targetPostId.likeCount++
    }
    else{targetPostId.likeCount--
    }
    targetPostId.downvote = !targetPostId.downvote
    renderfeed() 
}

function handleLikeClick(postId){
    const targetPostId = data.filter(function(post){
        return post.uuid === postId
    })[0]
    
    if (targetPostId.upvote){
        targetPostId.likeCount--
    }
    else{targetPostId.likeCount++
    }
    targetPostId.upvote = !targetPostId.upvote
    renderfeed() 
}

const data = [{
    
     Name: 'Bailey May',
    title: 'Adapting your portfolio',
    content:'“Higher for longer” was the message the market took from the Federal Reserve policy committee’s Wednesday decision. Officials hiked their target interest rate by 0.75 percentage point, and Chairman Jerome Powell drove home the message that there’s more work to be done. The moves prompted two days of sharp declines from major indexes that the market never recovered from. The Dow Jones Industrial Average finished the week down 1.40%, the S&P 500 lost 3.35%, and the Nasdaq Composite dropped 5.65%. Treasury yields rose across the curve, as investors priced in a higher peak, or terminal, rate and expectations that the Fed will keep rates there for some time.' ,
    likeCount: [25] ,
    upvote: false,
    repliesname: 'Adam',
    repliescontent:'blah',
    downvote:false,
    comments:false,
    share:false,
    replies:[
        
        {
                repliesname: `Harold Knock`,
                profilepicreplies: `images/man2.jpg`,
                repliescontent: `You have taught me so much!`,
            },{
                repliesname: `Heather Seltzer`,
                profilepicreplies: `images/woman3.jpg`,
                repliescontent: `Thanks Bailey, love this content.`,
            },
            {
                repliesname: `Louise Doe`,
                profilepicreplies: `images/woman4.jpg`,
                repliescontent: `My portfolio is looking better already!`,
            },
    ],
    profilePic: 'images/girl2.jpg',
    uuid: '115',  
},

{
    Name: 'Scott Green',
    title: 'How to learn new skills and have fun',
    content:' After I read Dr. Sanjay Guptas book, Keep Sharp: Build a Better Brain at Any Age, I was left with several compelling ideas. The most profound was: Do something different to help create new neural pathways which will help keep the old brain sizzling. It didnt matter whether it was carrying your coffee mug in the other hand, taking up a new language or tripping over your feet learning to play pickleball, mindfulness would improve mental acuity and help stave off memory loss. It would also add to a life that might have become a tad too routine (but that is my observation, not Dr. Guptas',
    likeCount: [6] ,
    upvote: false,
    downvote:false,
    share:false,
    replies:[
         {
                repliesname: `Michael Scott`,
                profilepicreplies: `images/man6.jpg`,
                repliescontent: `Wow, ill definetly try this out!`,
            },
    ],
    profilePic: 'images/images.jpg',
    uuid: '123981724'
},
    {
    Name: 'Alex Girbau',
    title: 'Why you should excercise',
    content:'Regular exercise is one of the best things you can do for your health.In fact, you’ll begin to see and feel the benefits consistent physical activity can have on your body and well-being quickly. However, working exercise into your routine takes a lot of determination, and sticking to it in the long term requires discipline.' ,
    likeCount: [10] ,
    upvote: false,
    downvote:false,
    replies:[{
                repliesname: `Todd Mack`,
                profilepicreplies: `images/girl4.jpg`,
                repliescontent: `Yes! Sign me up! 😎🛩`,
            },{
                repliesname: `Sara Pearosn`,
                profilepicreplies: `images/girl1.jpg`,
                repliescontent: `I agree! I try and get to the gym twice a week.`,
            },],
    share:false,
    profilePic: 'images/man1.jpg',
    uuid: '124098102948'
}, 
]

postBtn.addEventListener("click", function(){
    BtnClick()
})

function render(){
    feedHtml = ''
    
    data.forEach( function (post){
        
        let upClass = ''
        let downClass= ''
        let shareClass= ''
        
        
        if (post.upvote){
            upClass = 'up'
        }
       if (post.downvote){
            downClass = 'down'
        }
       if(post.share){
            shareClass = 'share'
        }
        
        let repliesHtml = ''
        
        if(post.replies.length > 0){
            post.replies.forEach(function(post){
            repliesHtml+=   
     `
     <div class="replies-container">
     <img src=${post.profilepicreplies} id="profilepicreplies">
     <p id="repliesname">${post.repliesname}</p>
     
     <div id="replies">
     <text>${post.repliescontent}</text>
     </div>
     </div>` })
        
        }
        
     feedHtml += `
     
    <div class="post-container">
                <div>
                <div>
                <img src="${post.profilePic}" id="profilepic">
                </div>
                    <p id="profilename">${post.Name}</p>
                    <h3>${post.title}</h3> 
                </div>
                <div class="content-container">
                    <div class="voteBox">
                        <i class="fa-solid fa-angle-up ${upClass}" 
                        data-up=${post.uuid}></i>
                        <p id="posttext">${post.likeCount}</p>
                        <i class="fa-solid fa-angle-down ${downClass} "  
                        data-down=${post.uuid}></i>
                        
                    </div>
            <text id="feed-content"> ${post.content} </text>
        </div>  
    </div>
    <div class="iconbox">
    <div class="icons">
    <i class="fa-regular fa-message "
    data-comments= ${post.uuid}></i>
    
    <p id="icontags">(${post.replies.length}) Comments</p>
    </div>
    <div class ="icons">
    <i class="fa-solid fa-bookmark ${shareClass}"
    data-share= ${post.uuid}></i>
    <p id="icontags">Share</p>
    </div>
    </div>
    <div class="hiddenr" id="replies-${post.uuid}">
 
    ${repliesHtml}
    </div
    </div>
    </div>
    
    `})
    
    return feedHtml
}

function BtnClick(){
 if(post.value === ''){} else{
     
    data.unshift({
        Name: 'Micky Asnake',
        title: post.value,
        content: hiddenboxsize.value ,
        likeCount: [0] ,
        profilePic: 'images/smile.jpg',
        uuid: uuidv4(),
        upvote: false,
        repliesname: '',
        repliescontent:'',
        downvote:false,
        comments:false,
        share:false,
        replies:[]
        
    },
    ) 
 
    post.value = ''
    hiddenboxsize.value = ''
    renderfeed()}
}

function renderfeed(){
  document.querySelector(".feed").innerHTML =  render()
  
}

renderfeed()