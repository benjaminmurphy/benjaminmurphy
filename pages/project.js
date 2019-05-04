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

      img {
        display: block;
        width: 400px;
        margin-left: auto;
        margin-right: auto;
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
          <p className='cormorant jet'>A Retrospective: Life Tenure Isn't Very Long.</p>
          <p className='raleway charcoal date'>
            May 3, 2019
          </p>

          <p className='raleway jet'>
            Three months later, a successful poster presentation complete, and having run many lines of Python, we'd like to use this post to reflect
            on what we've accomplished over the course of the semester, and what more is left to be done.
          </p>
          <h5 className='cormorant jet'>Overview</h5>
          <p className='raleway jet'>
            Our initial vision was to analyze polarization on the Supreme Court. We laid out a series of hypotheses related to this goal, and successfully
            trained word2vec models on a series of corpora (CourtListener, then several corpora requested from <a href="case.law">case.law</a>. In our
            <a href='ambulances.benjaminmurphy.me'>final interactive visualization</a>, you can experiment with this data yourself. However, we struggled
            to draw meaningful insights from these models. Beyond top-words analyses and computing similarity scores between pairs of words, we didn't
            find a holistic method of representing large-scale change over time.
          </p>
          <p className='raleway jet'>
            So, we pivoted! We seem to do that frequently. Since our primary struggle was quantifying results from word2vec, we opted to look at a
            fundamentally numeric metric: opinion length, and with this in mind we analyzed four hypotheses in our final work:
          </p>
          <ul className='raleway jet'>
            <li>Hypothesis #1: Supreme Court opinions have increased in length between 1900 and today.</li>
            <li>Hypothesis #2: As the number of opinions associated with a Supreme Court case increases, so too does the average length of each opinion.</li>
            <li>Hypothesis #3: Supreme Court opinions are longer than the opinions of lower courts.</li>
            <li>Hypothesis #4: Dissenting SCOTUS opinions are longer than majority opinions.</li>
          </ul>
          <p className='raleway jet'>
            We found evidence to support the first three hypotheses, and no evidence to support the last. We'll discuss our conclusions at the end of
            this post. We made significant progress towards analyzing opinion length, which we justified as a proxy for polarization on the Court, since
            more contention generally produces longer arguments than highly consistent opinions. Hence, we consider our project to have produced meaningful
            results, though there is of course always more to be done (and we'll discuss future directions later.)
          </p>
          <h5 className='cormorant jet'>Data</h5>
          <p className='raleway jet'>
            As previously mentioned, our final data set was sourced entirely from <a href='case.law'>case.law</a>, and included full text of all federal
            court opinions (Supreme Court, circuit court, and district court), along with a host of metadata including decision date, opinion authors,
            docket number, and more. We're confident the data set has many more insights contained within it, and we're interested in exploring more of
            these in the future.
          </p>
          <p className='raleway jet'>
            The data was already in good shape when we obtained it. It was in JSON format, and highly structured – besides slight noisiness in opinion
            content (since some opinions were collected via optical character recognition), we didn't have anything to do besides insert it into a database,
            which leads us to the next section of this post.
          </p>
          <h5 className='cormorant jet'>Methodology</h5>
          <p className='raleway jet'>
            We stored our data in a MongoDB instance running on MongoDB Atlas, their database-as-a-service offering. We explored the data using a number of
            means, including <a href='https://www.mongodb.com/products/compass'>MongoDB Compass</a>, custom-built aggregation pipelines, and plenty of API
            documentation.
          </p>
          <p className='raleway jet'>
            For extracting insights from the data, we relied on prebuilt word2vec models provided via <a href='https://radimrehurek.com/gensim/'>gensim</a>,
            which was invaluable in providing a clean interface for training our model. We cleaned the text of opinions using
            <a href='https://www.nltk.org'>Python's nltk library</a>. For regressions, used to analyze opinion length, we used scipy's linregress function,
            combined with a host of MongoDB calls to format the incoming data correctly, and subsequently visualized it using matplotlib.

            For our web visualization, we had a complex stack. Our word2vec results were served via a Flask server that kept a word2vec model hot for online
            querying. We ran a NodeJS web server for serving static files, complete with a full React stack involving Webpack, Babel, ReactJSS, and Bootstrap.
          </p>
          <h5 className='cormorant jet'>Conclusions and Future Directions</h5>
          <p className='raleway jet'>
            First, we'll discuss the results obtained, and the methods used for obtaining them.
          </p>
          <ul className='raleway jet'>
            <li>
              <h6 className='cormorant jet'>Hypothesis #1: Supreme Court opinions have increased in length between 1900 and today.</h6>
              We found, using linear regression, an increase of approximately 700 words per opinion from 1900 to modern day. Our line of best fit had
              an R-squared value of 0.405.
              <img src='/static/decision_word_count_vs_year.png' />
            </li>
            <li>
              <h6 className='cormorant jet'>Hypothesis #2: As the number of opinions associated with a Supreme Court case increases, so too does the average length of each opinion.</h6>
              Opinion length followed a near-linear pattern, going from approximately 750 words for unanimous opinions to over 4000 words for decisions containing
              eight opinions. Decisions with nine or ten opinions were the outliers, and hence were not well fit by our model, but given their relative scarcity
              we do not believe this challenges the validity of our results. Our line of best fit yielded an R-squared value of 0.603.
              <img src='/static/opinion_length_versus_unanimity.png' />
            </li>
            <li>
              <h6 className='cormorant jet'>Hypothesis #3: Supreme Court opinions are longer than the opinions of lower courts.</h6>
              We found that average opinion length across court lengths was highly variable, but that the Supreme Court retained a lead over circuit courts throughout
              the time frame we considered. However, our hypothesis was incorrect when it comes to district courts: They retained a significant lead over both types of
              appellate courts, and this lead appeared to be growing. However, this is likely attributable to the responsibility of district courts to summarize relevant
              facts in the case, a responsibility not evenly shared by appellate courts.
              <img src='/static/court_type.png' />
            </li>
            <li>
              <h6 className='cormorant jet'>Hypothesis #4: Dissenting SCOTUS opinions are longer than majority opinions.</h6>
              We found no noticeable difference between dissenting and majority opinion length at any point in the time frame we considered. This contradicts our expectation
              that dissenting opinions would be longer. We hypothesized this originally because dissenting opinions are not controlling precedent, so any effort committed to
              writing them is merely for posterity – and hence, flowery language and complex arguments shine.
              <img src='/static/majority_v_dissent.png' />
            </li>
          </ul>
          <p>
            Our word2vec models are available <a href='ambulances.benjaminmurphy.me'>here</a>, and (upon inputting a query) yield a visualization of similarity, which
            was produced by using React to generate svg elements in HTML.
          </p>
        </div>

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
