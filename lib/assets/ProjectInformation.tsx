import style from 'styles/components/_projectInformation.module.scss'
export const ProjectInformation = () => {
  return (
    <div>
      {' '}
      <h1>Project Information</h1>
      <div className={style.question}>Purpose of the project</div>
      You are invited to participate in a master’s thesis research project where
      the main purpose is to provide new research within cross platform in
      online learning.
      <div className={style.question}>
        Which institution is responsible for the research project?
      </div>
      Department of Computer Science (IDI) is responsible for the project.
      <div className={style.question}>
        Why are you being asked to participate?
      </div>
      As you are a student at NTNU
      <div className={style.question}>
        What does participation involve for you?
      </div>
      If you chose to take part in the project, this will involve that you fill
      in an online survey (1min) and navigate the website using several devices
      and performing beginner friendly coding tasks (recommended with
      computers). It will take approx. 45 minutes. Your data will be collected
      as you navigate the website and perform tasks.
      <div className={style.question}>Participation is voluntary </div>
      Participation in the project is voluntary. If you chose to participate,
      you can withdraw your consent at any time without giving a reason. All
      information about you will then be made anonymous. There will be no
      negative consequences for you if you chose not to participate or later
      decide to withdraw.
      <div className={style.question}>
        Your personal privacy – how we will store and use your personal data
      </div>
      We will only use your personal data for the purpose(s) specified here and
      we will process your personal data in accordance with data protection
      legislation (the GDPR). We will only use your personal data for the
      purpose(s) specified here and we will process your personal data in
      accordance with data protection legislation (the GDPR). The data collected
      are stored in a secure database that no unauthorized persons are able to
      access the personal data.
      <div className={style.question}>
        What will happen to your personal data at the end of the research
        project?
      </div>
      The planned end date of the project is in July and all personal data will
      be deleted.
      <div className={style.question}>Your rights </div>
      So long as you can be identified in the collected data, you have the right
      to:
      <ul>
        <li>access the personal data that is being processed about you</li>
        <li>request that your personal data is deleted</li>
        <li>
          request that incorrect personal data about you is corrected/rectified
        </li>
        <li>receive a copy of your personal data (data portability), and</li>
        <li>
          send a complaint to the Norwegian Data Protection Authority regarding
          the processing of your personal data
        </li>
      </ul>
      <div className={style.question}>
        What gives us the right to process your personal data?
      </div>
      We will process your personal data based on your consent. Based on an
      agreement with Department of Computer Science, The Data Protection
      Services of Sikt – Norwegian Agency for Shared Services in Education and
      Research has assessed that the processing of personal data in this project
      meets requirements in data protection legislation.
      <div className={style.question}>Where can I find out more?</div>
      If you have questions about the project, or want to exercise your rights,
      contact:
      <ul>
        <li>
          Department of Computer Science via Boban Vesin
          <div>boba.vesin@ntnu.no 48217455</div>
        </li>
        <li>
          Student Vemund Eggemoen <div>vemundeg@stud.ntnu.no 46808784</div>
        </li>
        <li>
          Student Johan August Østbye.
          <div>johanaos@stud.ntnu.no 91301594</div>
        </li>
      </ul>
      <br />
      If you have questions about how data protection has been assessed in this
      project by Sikt, contact:
      <ul>
        <li>
          email: (personverntjenester@sikt.no) or by telephone: +47 73 98 40 40.
        </li>
      </ul>
      <div className={style.agreeText}>
        By clicking the following button, I have received and understood
        information about the project Online Learning Platform - Cross Platform
        and have been given the opportunity to ask questions. I give consent for
        my personal data to be processed until the end of the project.
      </div>
    </div>
  )
}
