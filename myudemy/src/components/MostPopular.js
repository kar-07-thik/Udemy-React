
import courseImage1 from "../assets/images/coursesimage1 (1).jpg"
import courseImage2 from "../assets/images/coursesimage2.jpg"
import courseImage3 from "../assets/images/coursesimage3.jpg"
import courseImage4 from "../assets/images/coursesimage4.jpg"
function MostPopular (){
    return(
            
    <div class="mostpopular">
        <h1>Most Popular</h1>
        <p>Pcik the best fit</p>
        <div class="mostpopular__container">
            <div class="course-card">
            <img src={courseImage1} alt="CoursesImage"></img>
                <h3>2023 Python Data Visulisation Materclass</h3>
                <p>Col steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>9999</del></p>
            </div>
            <div class="course-card">
                  <img src={courseImage2} alt="CoursesImage"></img>
                <h3>2023 UI/UX</h3>
                <p>Col steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>4999</del></p>
            </div>
            <div class="course-card">
               <img src={courseImage3} alt="CoursesImage"></img>
                <h3>2023 Cyber Security</h3>
                <p>Col steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>4488</del></p>
            </div>
            <div class="course-card">
              <img src={courseImage4} alt="CoursesImage"></img>
                <h3>2023 Full Stack Development</h3>
                <p>Col steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>6383</del></p>

            </div>
            <div class="course-card">
                 <img src={courseImage2} alt="CoursesImage"></img>
                <h3>2023 Python Data Visulisation Materclass</h3>
                <p>Col steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>9999</del></p>
            </div>
            <div class="course-card">
              <img src={courseImage3} alt="CoursesImage"></img>
                <h3>2023 UI/UX</h3>
                <p>Col steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>4999</del></p>
            </div>
            <div class="course-card">
             <img src={courseImage4} alt="CoursesImage"></img>
                <h3>2023 Cyber Security</h3>
                <p>Col steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>4488</del></p>
            </div>
            <div class="course-card">
                  <img src={courseImage3} alt="CoursesImage"></img>
                <h3>2023 Full Stack Development</h3>
                <p>Col steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>6383</del></p>

            </div>
</div>
        </div>
    )
}
export default MostPopular