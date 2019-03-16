import Head from '../components/head';

export default () => (
  <div className='container root'>
    <style jsx>{`
      div.root {
        padding-top: 5%;
        position: relative;
      }

      body {
        background-color: #efefef;
      }

      p {
        font-size: 1em;
      }

      div.title {
        text-align: center;

        width: 100%;
      }

      span.title {
        font-size: 1.8em;
        font-weight: 800;
      }

      span.subtitle {
        font-size: 1.6em;
      }

      p.credits {
        padding-top: 8px;
        font-size: 0.7em;
        width: 100%;
        text-align: center;
      }

      div.post p:first-of-type{
        font-size: 1.4em;
        margin-bottom: 0;
      }

      div.post p.date {
        font-size: 0.8em;
        margin-bottom: 16px;
      }
    `}</style>

    <Head />

    <div className='row'>
      <div className='col-12'>
        <div className='cormorant red title'>
          <span className='title red'>Help! I've Fallen. What Court Should I Sue In?</span> <span className='subtitle cerulean'>An analysis of court opinions over time.</span>
        </div>

        <p className='raleway charcoal credits'>
          A project created by Claire Kim, <a href='/'>Ben Murphy</a>, Heila Precel, Jared Samilow, and Katie Scholl for <a href='https://cs.brown.edu/courses/csci1951-a'>CSCI1951-A: Data Science.</a>
        </p>

        <hr />

        <div className='post'>
          <p className='cormorant jet'>Initial Infrastructure and Data Proposals</p>
          <p className='raleway charcoal date'>
            March 8, 2019
          </p>
          <p className='raleway jet'>
            We're in the process of requesting bulk data access from <a href="courtlistener.com">CourtListener</a>. We'll manually scrape <a href="justia.com">Justia</a> if we find it to be necessary.
            We intend on starting with a small number of data sets, since we believe that we will be able to identify compelling stories from this alone.
          </p>
          <p className='raleway jet'>
            Our current plan is to run a cluster of analysis machines off of Google Compute Engine, or potentially Google Kubernetes Engine. We'll serve our resulting website off of Google App Engine,
            with data stored in Google Cloud SQL.
          </p>
        </div>

        <hr />

        <div className='post'>
          <p className='cormorant jet'>Project Goals</p>
          <p className='raleway charcoal date'>
            March 8, 2019
          </p>
          <p className='raleway jet'>
            <ul>
              <li><b>March 16:</b> We will have sourced all our data, and begun the process of importing it into our Google Cloud Platform database (either Cloud Datastore or Cloud SQL).</li>
              <li><b>March 23:</b> We will have performed initial data analysis: This may take the form of training n-gram models, learning word vectors, or other statistical techniques.</li>
              <li><b>April 6:</b> We will have confirmed our hypothesis, and begun the process of forming a narrative that explains our data.</li>
              <li><b>April 13:</b> We will have designed an interactive front-end, and determined the best manner for displaying our conclusions.</li>
              <li><b>April 20:</b> We will have written the copy for an educational portion of the website, and determined how it best ties in to our data.</li>
              <li><b>April 27:</b> We will have completed a beta version of our website, with interactive query functionality complete.</li>
              <li><b>May 3:</b> We will have completed a final version of our website, along with the associated poster.</li>
            </ul>
          </p>
        </div>

        <hr />

        <div className='post'>
          <p className='cormorant jet'>Division of Labor</p>
          <p className='raleway charcoal date'>
            March 8, 2019
          </p>
          <p className='raleway jet'>
            We will collaborate on the analysis of data, design of the final project website, and poster design.
            We'll also collaboratively write blog posts.
            However, we've decided to divide up some large areas of responsibility, so that individual members of our team take ownership of
            project components. These aren't intended as fixed lines; merely guiding principles.
          </p>

          <p className='raleway jet'>
            <ul>
              <li>
                Claire will focus on front-end design, including how we will structure interactive queries, and determining how to present our results in the
                most visually compelling manner.
              </li>
              <li>
                Katie will work on cleaning and importing data, and determining the best analysis techniques for our goals.
              </li>
              <li>
                Heila will focus on statistical and textual analysis techniques which we will apply to our corpus of court opinions.
              </li>
              <li>
                Jared will focus on result interpretation and analysis, along with developing a clear narrative for our hypothesis that serves to educate our
                readers.
              </li>
              <li>
                Ben will work on the data analysis pipeline and infrastructure, including web hosting and any machine learning tools that we choose to apply.
              </li>
            </ul>
          </p>
        </div>

        <hr />

        <div className='post'>
          <p className='cormorant jet'>Our Vision, Round Two</p>
          <p className='raleway charcoal date'>
            March 7, 2019
          </p>
          <p className='raleway jet'>
            <i>
              After experiencing challenges finding decent-quality data sets pertaining to ambulance travel time, socioeconomic data, and mortality rates,
              we decided to pivot to a secondary project topic, though ambulances will live on as the spirit vehicle of our work.
            </i>
          </p>
          <p className='raleway jet'>
            We will be investigating patterns within federal court opinion citations and text, and attempting to identify from them broader changes in
            social mores and jurisprudence in the United States. We want to help contextualize current decisions, identify alternative sources of
            precedent, and ideally improve understanding of the judicial system through interactive visualizations.
          </p>
          <p className='raleway jet'>
            We will make heavy use of data sets from <a href="courtlistener.com">CourtListener</a>,
            with <a href="pacer.gov">PACER</a> and <a href="justia.com">Justia</a> providing alternative sources. We'll examine attributes including:
            <ul>
              <li>Citations–examining patterns of citations of individual cases over time will hopefully unveil interesting patterns.</li>
              <li>Textual analysis of opinions–methodologies are uncertain, but n-gram or word vector approaches may be useful.</li>
              <li>Analysis of diversity on the court, along racial and gender lines, may reveal interesting correlations.</li>
            </ul>

            We'll also include an informative primer on the judicial system, including the differences between original and appellate jurisdiction,
            the route of a case through the court system, and changes in the role of the judicial system in American government over time.
          </p>

        </div>

        <hr />

        <div className='post'>
          <p className='cormorant jet'>Our Vision</p>
          <p className='raleway charcoal date'>
            February 21, 2019
          </p>
          <p className='raleway jet'>
            We aim to investigate connections between traffic congestion, ambulance wait times,
            and socioeconomic status. We want to help policymakers understand how poor transit
            conditions can cause increases in mortality, and then examine whether those increases
            are disproportionately concentrated in regions with populations that are predominantly
            comprised of minorities or of people of lower socioeconomic status.
          </p>
          <p className='raleway jet'>
            We’ll focus our work on one city, which is yet to be determined. Candidates include
            New York City, Detroit, Providence, Tempe, Virginia Beach, and Austin. We will make a final
            decision based on quality and availability of datasets. We may, as time permits, investigate
            the possibility of collaborating with the City of Providence and Warren Alpert Medical School.
          </p>
        </div>

        <hr />

        <div className='post'>
          <p className='cormorant jet'>Hello World!</p>
          <p className='raleway charcoal date'>
            February 20, 2019
          </p>
          <p className='raleway jet'>
            We'll be using this space to post updates on our work throughout the semester.
          </p>
        </div>

        <hr />
      </div>
    </div>
  </div>
);
