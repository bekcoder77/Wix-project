import React from 'react'
import "./Project.css"
function Project() {
  return (
    <div>
         <div className='projects py-[80px] px-[100px] mb-[60px  max-[992px]:w-[90%] max-[992px]:w-[100%] ] max-[1440px]:px-[95px] max-[992px]:px-[40]'>
        <div class="titlee text-[52px] font-semibold">Projects</div>
        <div class="projects_div flex justify-between my-[95px] max-[992px]:flex-wrap ">
          <div class="w-[60%]  max-[992px]:w-[90%] max-[992px]:w-[100%] ">
            <h1 className='project_title text-[36px] '>Project name 01</h1>
            <p className='w-[95%] text-[17px] leading-1 my-2'>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font.
            </p>
          </div>
          <div class="project_img ">
            <img className='w-[100%] h-[100%]  py-[20px]' src="./assets/r1.png" alt="" />
          </div>
        </div>
        <div class="projects_div flex justify-between my-[95px] max-[992px]:flex-wrap ">
          <div class=" w-[60%]  max-[992px]:w-[90%] max-[992px]:w-[100%] ">
            <h1 className='project_title text-[36px]' >Project name 02</h1>
            <p className='w-[95%] text-[17px] leading-1 my-2'>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font.
            </p>
          </div>
          <div class="project_img">
            <img src="./assets/r2.png" alt="" />
          </div>
        </div>
        <div class="projects_div flex justify-between my-[95px] max-[992px]:flex-wrap ">
          <div class="w-[60%]  max-[992px]:w-[90%] max-[992px]:w-[100%] ">
            <h1 className='project_title text-[36px]' >Project name 03</h1>
            <p className='w-[95%] text-[17px] leading-1 my-2'>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font.
            </p>
          </div>
          <div class="project_img">
            <img src="./assets/r3.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project