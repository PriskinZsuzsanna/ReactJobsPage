import React from 'react'
import './Container.css'
import JobContainer from './JobContainer'


const Container = () => {
  return (
    <div className='container'>
      <h1>IT PROGRAMOZÁZÓ, FEJLESZTŐ ÁLLÁSOK</h1>
      <JobContainer
        pozicio="Senior Cloud Security Engineer"
        ceg="Rufusz Computer Informatika Zrt."
        cim="1111 Budapest, Budafoki út 59."
        date="2 órája"
        munkaido="Teljes munkaidő, Home office"
        elvarasok={["Angol Középfok", "3-5 év szakmai tapasztalat", "Középiskola"]}
        technologiak={["Cloud", "Security", "Devops", "AWS", "VPN", "Docker"]}
        juttatasok={["Mobiltelefon", "Szakmai Tréningek", "Nyelvtanulás Támogatása"]}
        eszkozok={["Laptop", "Mobiltelefon"]}
        applyText="Jelentkezem"
        />
      <JobContainer
        pozicio="Devops engineer"
        ceg="LastPass Kft."
        cim="Flexible workplace - Budapest"
        date="1 napja"
        munkaido="Teljes munkaidő, Alkalmazotti jogviszony"
        elvarasok={["Angol Középfok", "3-5 év szakmai tapasztalat", "Általános iskola"]}
        technologiak={["Azur", "Bash", "Pyton", "Cloud", "Security", "Devops", "AWS", "VPN", "Docker"]}
        juttatasok={["Mobiltelefon", "Szakmai Tréningek", "Cafeteria"]}
        eszkozok={["Laptop"]}
        applyText="Jelentkezem"
        />
      <JobContainer
        pozicio="Full-Stack fejlesztő (Angular, Java)"
        ceg="UNIQA Raiffeisen Software Service Kft."
        cim="1053 Budapest, Szép utca 2."
        date="1 napja"
        munkaido="Teljes munkaidő, Alkalmazotti jogviszony"
        elvarasok={["Angol Középfok", "Német középfok", "3-5 év szakmai tapasztalat", "Középiskola"]}
        technologiak={["Angular", "Java", "Frontend", "Backend", "Vue.", "Git"]}
        juttatasok={["Nyeltanulás támogatása", "Szakmai Tréningek", "Cafeteria"]}
        eszkozok={["Laptop", "Mobiltelefon"]}
        applyText="Jelentkezem"
        />
      <JobContainer
        pozicio="Frontend Fejlesztő"
        ceg="enerhym solutions Kft."
        cim="9022 Győr"
        date="1 napja"
        munkaido="Teljes munkaidő, Home Office"
        elvarasok={["Angol Középfok", "3-5 év szakmai tapasztalat", "Főiskola"]}
        technologiak={["Angular", "Java", "Frontend", "Backend", "Vue.", "Git"]}
        juttatasok={["Nyeltanulás támogatása", "Szakmai Tréningek"]}
        eszkozok={["Laptop", "Monitor", "Headset", "Mobiltelefon"]}
        applyText="Jelentkezem"
        />
      <JobContainer
        pozicio="Full stack developer"
        ceg="GBD Szoftverszolgáltató Zrt."
        cim="Otthonról végezhető"
        date="2 napja"
        munkaido="Teljes munkaidő, Általános munkarend, Home Office"
        elvarasok={["Angol Középfok", "3-5 év szakmai tapasztalat", "Egyetem"]}
        technologiak={["Go", "Java", "Frontend", "Backend", "Vue.", "Git", "Docker"]}
        juttatasok={["Nyeltanulás támogatása", "Szakmai Tréningek"]}
        eszkozok={[]}
        applyText="Jelentkezem"
        />
      
    </div>
  )
}

export default Container
