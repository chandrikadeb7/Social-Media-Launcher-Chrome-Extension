var name_text = document.getElementById('name');
var website_link = document.getElementById('website');
var linkedin_link = document.getElementById('linkedin');
var medium_link = document.getElementById('medium');
var twitter_link = document.getElementById('twitter');
var github_link = document.getElementById('github');
var whatsapp_link = document.getElementById('whatsapp');
var facebook_link = document.getElementById('facebook');

var save_button = document.getElementById('save');

let array = ["name","website","linkedin","medium","twitter","github","whatsapp","facebook"];
chrome.storage.sync.get(array,function(links){
    if(!chrome.runtime.error){
        console.log(links);
        if(links.name)
            name_text.value=links.name+" ";
        if(links.website)
            website_link.value=links.website;
        if(links.linkedin)
            linkedin_link.value=links.linkedin;
        if(links.medium)
            medium_link.value=links.medium;
        if(links.twitter)
            twitter_link.value=links.twitter;
        if(links.github)
            github_link.value=links.github;
        if(links.whatsapp)
            whatsapp_link.value=links.whatsapp;
        if(links.facebook)
            facebook_link.value=links.facebook;
    }
});


save_button.addEventListener('click',function(){
    UpdateLinks();
});
function UpdateLinks(){
    let dict = {
        "name":name_text.value,
        "website":website_link.value,
        "linkedin":linkedin_link.value,
        "medium":medium_link.value,
        "twitter":twitter_link.value,
        "github":github_link.value,
        "whatsapp":whatsapp_link.value,
        "facebook":facebook_link.value
    }
    chrome.storage.sync.set(dict,function(){
        if(!chrome.runtime.error){
            console.log("Links Updated");
            window.location.pathname='popup.html'
        }
    })
}