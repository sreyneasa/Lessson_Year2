let movieList = [
    {
        id: 1,
        title: "កង្រីជាតិថ្មី",
        image: "images/poster-1.jpg",
        text: "រឿងព្រេងខ្មែរ​ ជារឿងនិទានប្រកបដោយគតិអប់រំទាក់ទិននឹងសីលធម៌សង្គម"
    },
    {
        id: 2,
        title: "ទាវសម័យថ្មី",
        image: "images/poster-2.jpg",
        text: "រឿងព្រេងខ្មែរ​ ជារឿងនិទានប្រកបដោយគតិអប់រំទាក់ទិននឹងសីលធម៌សង្គម"
    },
    {
        id: 3,
        title: "វិធាវី ២០២៤",
        image: "images/poster-3.jpg",
        text: "រឿងព្រេងខ្មែរ​ ជារឿងនិទានប្រកបដោយគតិអប់រំទាក់ទិននឹងសីលធម៌សង្គម"
    },
    {
        id: 4,
        title: "កាកី កែខ្លួន",
        image: "images/poster-4.jpg",
        text: "រឿងព្រេងខ្មែរ​ ជារឿងនិទានប្រកបដោយគតិអប់រំទាក់ទិននឹងសីលធម៌សង្គម"
    },
    {
        id: 5,
        title: "កុលាបប៉ៃលិន ថ្មី",
        image: "images/poster-5.jpg",
        text: "រឿងព្រេងខ្មែរ​ ជារឿងនិទានប្រកបដោយគតិអប់រំទាក់ទិននឹងសីលធម៌សង្គម"
    },
    {
        id: 6,
        title: "ស្មេហ៍ក្រោមពន្លឺច៍ន្ទ្រា",
        image: "images/poster-6.jpg",
        text: "រឿងព្រេងខ្មែរ​ ជារឿងនិទានប្រកបដោយគតិអប់រំទាក់ទិននឹងសីលធម៌សង្គម"
    },
];


function createPoster(object) {
    for (let value of object) {
        // TODO: create poster with different content here
        let tdId = document.createElement('id');
        tdId.textContent = value['id'];
        tr.appendChild(tdId);

        let title = document.createElement('title');
        title.textContent = value.title;
        tr.appendChild(title);
        
        let image = document.createElement('imag');
        image.src = value.image;
        tr.appendChild(image);


        let content = document.createElement('content');
        content.textContent = value.content;
        tr.appendChild(content);

    }
}

    // Main code 
    const container = document.querySelector('.container');

    // TODO: Call function to create poster with data here
    createPoster(movieList)


    