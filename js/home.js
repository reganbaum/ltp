function showExp(num) {
  let exp = document.getElementById('explaination');
  let active;
  switch (num) {
    case 1:
      active = document.getElementById('ben-1');
      active.style.color = 'white';
      active.style.backgroundImage = 'linear-gradient(-20deg, #333, #4a4e63)';
      exp.style.display = 'block';
      exp.innerText = "LTP encourages creativity and self-expression through photography and writing.  Both photography and writing support each other throughout any LTP project.  When looking at a photo with no caption or story associated with it, viewers must fill in the gaps and answer questions on their own.  When reading a piece of writing, readers visualize in their minds, but their visualization may be very different from what the author visualized as they wrote.  When photos and words are combined, a more complete story can be shared.  There still might be gaps and questions, but each medium complements the other and adds to the creator's story, more than just one of the mediums would alone.";
      break;
    case 2:
      active = document.getElementById('ben-2');
      active.style.color = 'white';
      active.style.backgroundImage = 'linear-gradient(-20deg, #333, #4a4e63)';
      exp.style.display = 'block';
      exp.innerText = 'One core component of the LTP framework includes an activity called Reading Photographs.  In this activity, students "read" a photo: first, they identify items in the photo they see; then, they interpret the photo and the story behind it.  Reading a photo requires students to apply their observation skills and take note of even the smallest details.  Observation skills are important for people of all ages and in any career field.  This activity lets students hone these observation skills by deeply studying a photo and using what they see to inform their interpretations of the photo.  Students can carry their developed observation skills with them, beyond an LTP project, into their own personal and academic lives.';
      break;
    case 3:
      active = document.getElementById('ben-3');
      active.style.color = 'white';
      active.style.backgroundImage = 'linear-gradient(-20deg, #333, #4a4e63)';
      exp.style.display = 'block';
      exp.innerText = 'What comes to mind when you think of creativity?  Creativity is more than just artistic skill.  While the two may overlap, creativity encompasses a wide range of skills, including persistence, listening skills, flexibility, communicating clearly, observing, modeling, empathizing, synthesizing, and more.  LTP projects give students the freedom to develop and apply these creative skills without the fear of doing something the "wrong way."  Anyone can develop their creative skills if they have the opportunity to practice and apply those skills, and LTP gives students that opportunity to grow as creators.';
      break;
    case 4:
      active = document.getElementById('ben-4');
      active.style.color = 'white';
      active.style.backgroundImage = 'linear-gradient(-20deg, #333, #4a4e63)';
      exp.style.display = 'block';
      exp.innerText = "Another core component of the LTP framework involves exhibiting or sharing students' work in some way.  Sharing students' work allows students, as well as teachers, to learn more about others in their communities, gaining a deeper sense of community.  Sometimes, exhibits include community members beyond the classroom as well, which further enhances community development on a larger scale.  Additionally, the LTP process is very collaborative.  Through this collaborative process, students are able to better understand their peers and the perspectives of one another.  By working together, students are able to feel more connected to their classroom community.";
      break;
    case 5:
      active = document.getElementById('ben-5');
      active.style.color = 'white';
      active.style.backgroundImage = 'linear-gradient(-20deg, #333, #4a4e63)';
      exp.style.display = 'block';
      exp.innerText = 'Students are more motivated when they are personally connected to the curriculum.  LTP projects often begin with what students know intimately — themselves.  By beginning with the students and their own stories, students feel more connected to what they are doing and in turn are more enthusiastic about what they are learning.  If students feel more connected to what they are learning, they will be motivated to do their best.  This motivation also affects motivation in other academic areas as well.';
      break;
    case 6:
      active = document.getElementById('ben-6');
      active.style.color = 'white';
      active.style.backgroundImage = 'linear-gradient(-20deg, #333, #4a4e63)';
      exp.style.display = 'block';
      exp.innerText = 'LTP promotes self-confidence and empowers students to share their stories.  One goal of LTP is to help students find their voice and realize that their thoughts, ideas, and stories matter.  Without the restriction of right or wrong answers in an LTP project, students are able to express themselves and their ideas however they want to, giving them a stronger sense of ownership of their projects.  LTP encourages students to be the directors and curators of their own work.  When students are given freedom to express themselves, they can become more confident in themselves and their thoughts, ideas, and stories.';
      break;
    default:
      exp.innerText = '';
      break;
  }
  for (let i = 1; i < 7; i++) {
    if (i !== num) {
      other = document.getElementById('ben-' + i.toString());
      other.style.color = 'rgb(34, 34, 34)';
      other.style.backgroundImage = 'linear-gradient(#f8f8f8, #c9ccec)';
    }
  }
  return;
}
