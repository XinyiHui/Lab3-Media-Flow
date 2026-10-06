const islandSequence = [

    {
        stage: "Beginning",

        image: "img/home.JPG",

        caption:
            "My puppy is at home and ready to begin the trip."
    },


    {
        stage: "Middle",

        image: "img/flying.JPG",

        caption:
            "My puppy successfully completed its first flight and arrived at this island."
    },


    {
        stage: "End",

        image: "img/happy.JPG",

        caption:
            "My puppy finally arrives at the island and enjoys the beach."
    }

];



const homeSequence = [

    {
        stage: "Beginning",

        image: "img/happy.JPG",

        caption:
            "The island trip is over and my puppy is ready to leave."
    },


    {
        stage: "Middle",

        image: "img/flying.JPG",

        caption:
            "My puppy takes the airplane back home."
    },


    {
        stage: "End",

        image: "img/home.JPG",

        caption:
            "My puppy finally returns home after the island trip."
    }

];



let currentSequence = [];

let currentIndex = 0;

let isChanging = false;



const islandBtn =
    document.getElementById("islandBtn");


const homeBtn =
    document.getElementById("homeBtn");


const nextBtn =
    document.getElementById("nextBtn");


const storyCard =
    document.getElementById("story-card");


const storyImage =
    document.getElementById("story-image");


const stage =
    document.getElementById("stage");


const caption =
    document.getElementById("caption");


const progress =
    document.getElementById("progress");


const direction =
    document.getElementById("direction");




function showStory() {

    const currentStory =
        currentSequence[currentIndex];


    stage.textContent =
        currentStory.stage;


    storyImage.src =
        currentStory.image;


    caption.textContent =
        currentStory.caption;


    progress.textContent =
        (currentIndex + 1) +
        " / " +
        currentSequence.length;



    if (
        currentIndex ===
        currentSequence.length - 1
    ) {

        nextBtn.textContent =
            "Start Again";

    }

    else {

        nextBtn.textContent =
            "Next →";

    }

}



function changeStory() {

    if (isChanging === true) {

        return;

    }


    isChanging = true;


    storyImage.classList.add("fade-out");


    setTimeout(function () {


        showStory();


        setTimeout(function () {

            storyImage.classList.remove(
                "fade-out"
            );


            isChanging = false;

        }, 50);


    }, 300);

}



function startJourney(sequence, journeyText) {

    currentSequence = sequence;

    currentIndex = 0;


    direction.textContent =
        journeyText;


    document.body.classList.add(
        "story-started"
    );


    storyCard.classList.add("show");


    changeStory();

}



islandBtn.addEventListener(
    "click",

    function () {

        startJourney(

            islandSequence,

            "Journey: Home → Airplane → Island"

        );

    }
);



homeBtn.addEventListener(
    "click",

    function () {

        startJourney(

            homeSequence,

            "Journey: Island → Airplane → Home"

        );

    }
);



nextBtn.addEventListener(
    "click",

    function () {

        if (
            currentIndex <
            currentSequence.length - 1
        ) {

            currentIndex++;

        }

        else {

            currentIndex = 0;

        }


        changeStory();

    }
);