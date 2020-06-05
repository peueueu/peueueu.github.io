import React from 'react';
import EducationCard from '../EducationCard';
import { CourseWrapper, CourseTitle, CourseListWrapper, CourseList, CourseItem, CourseLink } from './styled';
import { courses } from './courses';

const Courses: React.FC<{ title: string }> = (props) => {
  return (
    <CourseWrapper>
      <CourseTitle>{props.title}</CourseTitle>
      <CourseListWrapper>
        <CourseList>
          {
            courses.map((i: any, curso: any) => {
              const Course = courses[curso];
              console.log(Course);
              return (
                <CourseItem>
                  <CourseLink href={Course.url} target="_blank" rel="noopener noreferer">
                    <EducationCard institution={Course.institution} course={Course.course} workload={Course.workload} key={i} />
                  </CourseLink>
                </CourseItem>
              )
            })
          }
        </CourseList>
      </CourseListWrapper>
    </CourseWrapper>
  )
}

export default Courses;