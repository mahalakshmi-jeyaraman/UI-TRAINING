import blenderVideo from "../json/video.json" assert{type:'json'};
import posterThumbnail from "../json/posters.json" assert{type:'json'};

const comments = blenderVideo['comments'];
const fragments = new DocumentFragment();

const blenderMovies = document.createElement('div');
blenderMovies.className ='blender-movies';

const videoClip = document.createElement('video');
videoClip.src = blenderVideo.videoUrl;
videoClip.className = 'video-clip';
videoClip.controls = true;
blenderMovies.appendChild(videoClip);

const videoTitle = document.createElement('h3');
videoTitle.className = 'video-title';
videoTitle.textContent = 'Sintel';
blenderMovies.appendChild(videoTitle);

const videoDescription = document.createElement('p');
videoDescription.className ='video-description';
videoDescription.textContent = blenderVideo.description;
blenderMovies.appendChild(videoDescription);

const hrElement = document.createElement('hr');
blenderMovies.appendChild(hrElement);

const heading4Element = document.createElement('h4');
heading4Element.textContent = 'Comments';
blenderMovies.appendChild(heading4Element);

for( const details of blenderVideo.comments){
    const commentsSection = document.createElement('div');
    commentsSection.className = 'comments-section';
    const reviewers = document.createElement('div');
    reviewers.className = 'reviewers';
    commentsSection.appendChild(reviewers);

    const reviewerProfileImage = document.createElement('img');
    reviewerProfileImage.src = details.image;
    reviewerProfileImage.alt = details.name;
    reviewerProfileImage.className = 'reviewer-profile-img';
    reviewers.appendChild(reviewerProfileImage);

    const reviewerContent = document.createElement('div');
    reviewerContent.className = 'reviewer-content';
    reviewers.appendChild(reviewerContent);

    const reviewerName = document.createElement('p');
    reviewerName.className = 'reviewer-name';
    reviewerName.textContent = details.name;
    reviewerContent.appendChild(reviewerName);

    const reviewerComments = document.createElement('p');
    reviewerComments.className = 'reviewer-comments';
    reviewerComments.textContent = details.comment;
    reviewerContent.appendChild(reviewerComments);

    blenderMovies.appendChild(commentsSection);
}

fragments.appendChild(blenderMovies);

const upcomingProjects = document.createElement('div');
upcomingProjects.className = 'upcoming-projects';

const heading3Element = document.createElement('h3');
heading3Element.textContent = 'Upcoming Projects';
upcomingProjects.appendChild(heading3Element);

const  movieThumbnails = document.createElement('div');
movieThumbnails.className = 'movie-thumbnails';

for(const details of posterThumbnail){
    const  thumbnail = document.createElement('img');
    thumbnail.src = details.imageUrl;
    thumbnail.alt = 'thumbnail';
    thumbnail.className = 'thumbnail';
    movieThumbnails.appendChild(thumbnail);
}

upcomingProjects.appendChild(movieThumbnails);
fragments.appendChild(upcomingProjects);

const mainSection = document.getElementsByClassName('main-section');
mainSection.appendChild(fragments);
document.querySelector(".row-container").innerHTML = output;



