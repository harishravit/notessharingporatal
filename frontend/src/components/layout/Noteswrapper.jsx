import { NoDataDisplay, Notes } from "components"
const Noteswrapper = () => {
    const NotesData = [
        {
            id: 1,
            title: "Database",
            description:"hdask a asjfas saasfas asfas fsakjsf sajas fsjksaf asnasnfasj jfhaihas asifas f assansk",
            Author: {
                name: "Alisha",
                picture: "./src/assets/Images/man-1.jpeg"
            },
            Tags: ["unit-1", "unit-2","unit-2","unit-1","unit-6","unit-0"]
        },
         {
            id: 2,
            title: "Database",
            description:"hdask a asjfas saasfas asfas fsakjsf sajas fsjksaf asnasnfasj jfhaihas asifas f assansk",
            Author: {
                name: "Alisha",
                picture: "./src/assets/Images/man-1.jpeg"
            },
            Tags: ["unit-1", "unit-2","unit-2","unit-1","unit-6","unit-0"]
        },
         {
            id: 3,
            title: "Database",
            description:"hdask a asjfas saasfas asfas fsakjsf sajas fsjksaf asnasnfasj jfhaihas asifas f assansk",
            Author: {
                name: "Alisha",
                picture: "./src/assets/Images/man-1.jpeg"
            },
            Tags: ["unit-1", "unit-2","unit-2","unit-1","unit-6","unit-0"]
        },
         {
            id: 4,
            title: "Database",
            description:"hdask a asjfas saasfas asfas fsakjsf sajas fsjksaf asnasnfasj jfhaihas asifas f assansk",
            Author: {
                name: "Alisha",
                picture: "./src/assets/Images/man-1.jpeg"
            },
            Tags: ["unit-1", "unit-2","unit-2","unit-1","unit-6","unit-0"]
        },
         {
            id: 5,
            title: "Database",
            description:"hdask a asjfas saasfas asfas fsakjsf sajas fsjksaf asnasnfasj jfhaihas asifas f assansk",
            Author: {
                name: "Alisha",
                picture: "./src/assets/Images/man-1.jpeg"
            },
            Tags: ["unit-1", "unit-2","unit-2","unit-1","unit-6","unit-0"]
        },
         {
            id: 6,
            title: "Database",
            description:"hdask a asjfas saasfas asfas fsakjsf sajas fsjksaf asnasnfasj jfhaihas asifas f assansk",
            Author: {
                name: "Alisha",
                picture: "./src/assets/Images/man-1.jpeg"
            },
            Tags: ["unit-1", "unit-2","unit-2","unit-1","unit-6","unit-0"]
        },
         {
            id: 7,
            title: "Database",
            description:"hdask a asjfas saasfas asfas fsakjsf sajas fsjksaf asnasnfasj jfhaihas asifas f assansk",
            Author: {
                name: "Alisha",
                picture: "./src/assets/Images/man-1.jpeg"
            },
            Tags: ["unit-1", "unit-2","unit-2","unit-1","unit-6","unit-0"]
        },
         {
            id: 8,
            title: "Database",
            description:"hdask a asjfas saasfas asfas fsakjsf sajas fsjksaf asnasnfasj jfhaihas asifas f assansk",
            Author: {
                name: "Alisha",
                picture: "./src/assets/Images/man-1.jpeg"
            },
            Tags: ["unit-1", "unit-2","unit-2","unit-1","unit-6","unit-0"]
        },
         {
            id: 9,
            title: "Database",
            description:"hdask a asjfas saasfas asfas fsakjsf sajas fsjksaf asnasnfasj jfhaihas asifas f assansk",
            Author: {
                name: "Alisha",
                picture: "./src/assets/Images/man-1.jpeg"
            },
            Tags: ["unit-1", "unit-2","unit-2","unit-1","unit-6","unit-0"]
        }
    ]
    return (
        <div className={`${NotesData.length > 0 ? "notes" : "empty_notes"}`}>
            {NotesData.length <= 0 && <NoDataDisplay />}
            {NotesData.map((note, index) => {
                const {id, title, Author, Tags ,description} = note;
                return(
                <Notes
                key={id+1}
                title={title}
                authorName={Author.name}
                authorPic={Author.picture} 
                des={description}
                tags={Tags}/>
                )
            })}
        </div>
    )
}
export default Noteswrapper