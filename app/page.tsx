export default function Page() {
  return (
    <main>
      <h1>Chester Syron Damian</h1>
      <p>Official Self-Proclaimed Software Engineer</p>

      <div>
        <p>
          I am a jack of all trades and a master of none with a Bachelor of
          Science in Computer Science, whose main objective is to finally pursue
          something that I am really interested in, It's all about Software
          Development and Web Development.
        </p>

        <p>
          "Experience is the best teacher in life, so I'll just get coffee, sit
          down, and code"
        </p>
      </div>

      <section id="about">
        <h2>Background</h2>

        <div>
          <h3>Work Experiences and Education</h3>
          <h4>Work Experiences</h4>
          <ul>
            <li>Customer Service Production Associate - DemandScience</li>
            <ul>
              <li>
                Set up and maintained in-house technical systems and other 3rd
                party platforms for data collection and analysis
              </li>
              <li>Provide customer support via email and chat</li>
              <li>
                Used SQL, HTML, CSS to create landing pages and reports that
                will be used for a Campaigns
              </li>
              <li>
                Collaborate with other teams to ensure quality and accuracy of
                data
              </li>
            </ul>

            <li>L1 Support Associate - SLG Consulting, Inc.</li>
            <ul>
              <li>
                Responsible for providing technical support and assistance to
                customer and users related to power and utilities sector
              </li>
              <li>
                Handle basic issues and inquiries related to Oracle Utilities
                Customer Care & Billing (CC&B) and Customer to Meter (C2M)
                systems
              </li>
              <li>
                Responsible for Batch monitoring and creating a daily reports
                during Batch Process
              </li>
            </ul>

            <li>Associate Software Developer - SLG Consulting, Inc.</li>
            <ul>
              <li>
                Responsible for learning Microsoft Power BI and Create a
                Dashboard for Report Visualization
              </li>
            </ul>

            <li>Associate Software Developer - FYDesigns Inc.</li>
            <ul>
              <li>
                Experienced Microsoft SQL Server, Power Builder and Drupal(CMS)
              </li>
              <li>
                Communicate with clients to gather some requirements and
                troubleshoot some problems
              </li>
              <li>Implemented Databases for Automation Projects</li>
              <li>
                Resolving issues of CMS Projects and Keeping everything up to
                date
              </li>
            </ul>

            <li>Back Office Associate - Aptus Global Solutions Inc.</li>
            <ul>
              <li>
                Responsible for Data Annotation, that will help clients train
                their artificial intelligence models.
              </li>
              <li>
                Responsible for labeling and categorizing different types of
                data, such as images, videos, text, and audio.
              </li>
            </ul>
          </ul>
        </div>

        <div>
          <h4>Education</h4>
          <ul>
            <li>
              Bachelor of Science in Computer Science - STI College Novaliches
            </li>
          </ul>
        </div>

        <div>
          <h4>Skills</h4>
          <ul>
            <li>Python</li>
            <li>SQL</li>
            <ul>
              <li>MS SQL</li>
              <li>Oracle SQL</li>
              <li>Postgres SQL</li>
            </ul>
            <li>Microsoft Power BI</li>
            <li>NextJS</li>
            <li>Database Analysis and Architecture</li>
            <li>Concepts of Project Management and SDLC</li>
          </ul>
        </div>
      </section>

      <section id="portfolio">
        <h2>Here are some of my Projects</h2>

        <a>
          Project 1
          <img
            src="https://www.meiermeier.de/wp-content/uploads/2016/04/portfolio-placeholder.jpg"
            alt="placeholder"
            width="300px"
            height="300px"
          />
        </a>
        <a>
          Project 1
          <img
            src="https://www.meiermeier.de/wp-content/uploads/2016/04/portfolio-placeholder.jpg"
            alt="placeholder"
            width="300px"
            height="300px"
          />
        </a>
        <a>
          Project 3
          <img
            src="https://www.meiermeier.de/wp-content/uploads/2016/04/portfolio-placeholder.jpg"
            alt="placeholder"
            width="300px"
            height="300px"
          />
        </a>
      </section>

      <section id="contact-me">
        <h2>Contact Me</h2>
        <form>
          <fieldset>
            <legend>Contact Me</legend>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Name" />

            <label htmlFor="Email">Email:</label>
            <input type="email" name="email" id="email" placeholder="Email" />

            <label htmlFor="Subject">Subject:</label>
            <select name="subject" id="subject">
              <option value="general inquiry">General Inquiry</option>
              <option value="general inquiry">Support Request</option>
              <option value="general inquiry">Feedback/Suggestion</option>
              <option value="general inquiry">Other</option>
            </select>

            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Write something here ..."
            ></textarea>

            <button type="submit">Send Message</button>
          </fieldset>
        </form>
      </section>
    </main>
  );
}
