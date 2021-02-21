import React from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import ReadsEntry from "../components/reads-entry"
import NotesEntry from "../components/notes-entry"

gsap.registerPlugin(ScrollTrigger)
gsap.core.globals('ScrollTrigger', ScrollTrigger)

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.reads = React.createRef()
    this.notes = React.createRef()
    this.optimize_what = React.createRef()
    this.optimize_what_notes = React.createRef()
    this.substack = React.createRef()
    this.substack_notes = React.createRef()
    this.small_needful_fact = React.createRef()
    this.small_needful_fact_notes = React.createRef()
    this.donkey_kong = React.createRef()
    this.donkey_kong_notes = React.createRef()
    this.how_to_do_nothing = React.createRef()
    this.how_to_do_nothing_notes = React.createRef()
    this.an_attempt_resegregate_lr = React.createRef()
    this.an_attempt_resegregate_lr_notes = React.createRef()
    this.miseducation = React.createRef()
    this.miseducation_notes = React.createRef()
  }

  componentDidMount() {
    this.optimize_what_tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#optimize_what',
        scrub: 1,
        pin: false,
        ease: 'power1',
        start: 'top top',
        end: '+=' + this.optimize_what.current.clientHeight//, markers: true
      }
    })
    // .to('#reads', {
    //   y: '-=' + this.optimize_what.current.clientHeight,
    //   duration: 10
    // })
    .to('#notes', {
      y: '-=' + this.optimize_what_notes.current.clientHeight,
      duration: 10
    })

    this.substack_tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#substack',
        scrub: 1,
        pin: false,
        ease: 'power1',
        start: 'top top',
        end: '+=' + this.substack.current.clientHeight//, markers: true
      }
    })
    // .to('#reads', {
    //   y: '-=' + this.substack.current.clientHeight,
    //   duration: 10
    // })
    .to('#notes', {
      y: '-=' + this.substack_notes.current.clientHeight,
      duration: 10
    })

    this.small_needful_fact_tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#small_needful_fact',
        scrub: 1,
        pin: false,
        ease: 'power1',
        start: 'top top',
        end: '+=' + this.small_needful_fact.current.clientHeight//, markers: true
      }
    })
    // .to('#reads', {
    //   y: '-=' + this.small_needful_fact.current.clientHeight,
    //   duration: 10
    // })
    .to('#notes', {
      y: '-=' + this.small_needful_fact_notes.current.clientHeight,
      duration: 10
    })

    this.donkey_kong_tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#donkey_kong',
        scrub: 1,
        pin: false,
        ease: 'power1',
        start: 'top top',
        end: '+=' + this.donkey_kong.current.clientHeight//, markers: true
      }
    })
    // .to('#reads', {
    //   y: '-=' + this.donkey_kong.current.clientHeight,
    //   duration: 10
    // })
    .to('#notes', {
      y: '-=' + this.donkey_kong_notes.current.clientHeight,
      duration: 10
    })

    this.how_to_do_nothing_tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#how_to_do_nothing',
        scrub: 1,
        pin: false,
        ease: 'power1',
        start: 'top top',
        end: '+=' + this.how_to_do_nothing.current.clientHeight//, markers: true
      }
    })
    // .to('#reads', {
    //   y: '-=' + this.how_to_do_nothing.current.clientHeight,
    //   duration: 10
    // })
    .to('#notes', {
      y: '-=' + this.how_to_do_nothing_notes.current.clientHeight,
      duration: 10
    })

    this.an_attempt_resegregate_lr_tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#an_attempt_resegregate_lr',
        scrub: 1,
        pin: false,
        ease: 'power1',
        start: 'top top',
        end: '+=' + this.an_attempt_resegregate_lr.current.clientHeight//, markers: true
      }
    })
    // .to('#reads', {
    //   y: '-=' + this.an_attempt_resegregate_lr.current.clientHeight,
    //   duration: 10
    // })
    .to('#notes', {
      y: '-=' + this.an_attempt_resegregate_lr_notes.current.clientHeight,
      duration: 10
    })

    this.miseducation_tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#miseducation',
        scrub: true,
        pin: false,
        ease: 'power1',
        start: 'top top',
        end: '+=' + this.miseducation.current.clientHeight//, markers: true
      }
    })
    // .to('#reads', {
    //   y: '-=' + this.miseducation.current.clientHeight,
    //   duration: 10
    // })
    .to('#notes', {
      y: '-=' + this.miseducation_notes.current.clientHeight,
      duration: 10
    })
  }

  render() {
    return (
      <Layout>
        <SEO title="anne's reads 📰" />
        <h1 style={{ fontSize: '1rem', textAlign: 'center' }}>
          TODO: fix awful scrolling & add books (w/ longer quotes) once scrolling finally works
        </h1>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div ref={this.reads} id='reads' style={{ width: '50%'/*, borderRight: '2px dashed black'*/ }}>
            {/* Reads */}
            <ReadsEntry
              ref={this.optimize_what}
              id='optimize_what'
              words='4071'
              title='Optimize What?'
              author='Jimmy Wu'
              publication='Commune Mag'
              url='https://communemag.com/optimize-what/'
              book='false'
            />
            <div style={{ height: '25px' }} />
            <ReadsEntry
              ref={this.substack}
              id='substack'
              words='5104'
              title='Is Substack the Media Future We Want?'
              author='Anna Wiener'
              publication='The New Yorker'
              url='https://www.newyorker.com/magazine/2021/01/04/is-substack-the-media-future-we-want'
              book='false'
            />
            <div style={{ height: '25px' }} />
            <ReadsEntry
              ref={this.small_needful_fact}
              id='small_needful_fact'
              words='83'
              title='A Small Needful Fact'
              author='Ross Gay'
              publication=''
              url='https://poets.org/poem/small-needful-fact'
              book='false'
            />
            <div style={{ height: '25px' }} />
            <ReadsEntry
              ref={this.donkey_kong}
              id='donkey_kong'
              words='1337'
              title='Can a Neuroscientist Understand Donkey Kong, Let Alone a Brain?'
              author='Ed Yong'
              publication='The Atlantic'
              url='https://www.theatlantic.com/science/archive/2016/06/can-neuroscience-understand-donkey-kong-let-alone-a-brain/485177/'
              book='false'
            />
            <div style={{ height: '25px' }} />
            <ReadsEntry
              ref={this.how_to_do_nothing}
              id='how_to_do_nothing'
              words='10173'
              title='how to do nothing'
              author='Jenny Odell'
              publication=''
              url='https://medium.com/@the_jennitaur/how-to-do-nothing-57e100f59bbb'
              book='false'
            />
            <div style={{ height: '25px' }} />
            <ReadsEntry
              ref={this.an_attempt_resegregate_lr}
              id='an_attempt_resegregate_lr'
              words='2522'
              title='An Attempt to Resegregate Little Rock, of All Places'
              author='Adam Harris'
              publication='The Atlantic'
              url='https://www.theatlantic.com/education/archive/2019/10/little-rock-still-fighting-school-integration/600436/'
              book='false'
            />
            <div style={{ height: '25px' }} />
            <ReadsEntry
              ref={this.miseducation}
              id='miseducation'
              words='7199'
              title='A Year of Miseducation'
              author='Matt Thompson'
              publication='The Atlantic'
              url='https://www.theatlantic.com/entertainment/archive/2018/12/lauryn-hill-tara-westover-cameron-post-the-year-in-miseducation/579160/'
              book='false'
            />
          </div>
          <div ref={this.notes} id='notes' style={{ width: '50%' }}>
            {/* Notes */}
            <NotesEntry ref={this.optimize_what_notes}>
              <p>
                <b>January 2021</b>
                <br />
                <br />
                "Yet in positioning itself as tech’s moral compass, academic computer science belies
                the fact that its own intellectual tools are the source of the technology industry’s
                dangerous power. A significant part of the problem is the kind of ideology it instills
                in students, researchers, and society at large. It’s not just that engineering education
                teaches students to think that all problems deserve technical solutions...the curriculum
                is built around an entire value system that knows only utility functions, symbolic manipulations,
                and objective maximization."
                <br />
                <br />
                "Boyd teaches this course once a year, and typically in the first lecture, he declares:
                'Everything is an optimization problem.' The claim reeks of techno-utilitarian naïveté,
                with its suggestion that every object can be modeled as a bunch of numbers, every human
                desire expressed in a utility function, every problem resolvable using the more or less
                crude calculation devices in our pockets."
              </p>
            </NotesEntry>
            <div style={{ height: '25px' }} />
            <NotesEntry ref={this.substack_notes}>
              <p>
                <b>January 2021</b>
                <br />
                <br />
                "Substack has some social features, like comments sections and discussion threads, but the
                newsletter ecosystem seems to lack the camaraderie that animated blogging communities.
                Unlike blogs, which link to other blogs almost as an ontological condition, most newsletters
                are impossible to find without an external referral or recommendation...Reggie James, the
                founder of Eternal, a social network in development, and the author of 'Product Lost,' a
                newsletter that takes an artistic, humanist approach to technology (free), was skeptical
                of the idea that Substack was an antidote to social media; about half his readers come through
                social networks. As long as writers were beholden to the logic of social-media algorithms, he said,
                Substack was still 'playing the game of the platforms.'"
              </p>
            </NotesEntry>
            <div style={{ height: '25px' }} />
            <NotesEntry ref={this.small_needful_fact_notes}>
              <p>
                <b>January 2021</b>
              </p>
            </NotesEntry>
            <div style={{ height: '25px' }} />
            <NotesEntry ref={this.donkey_kong_notes}>
              <p>
                <b>September 2020</b>
              </p>
            </NotesEntry>
            <div style={{ height: '25px' }} />
            <NotesEntry ref={this.how_to_do_nothing_notes}>
              <p>
                <b>April 2020</b>
                <br />
                <br />
                "'...what a relief to have nothing to say, the right to say nothing, because only then is there a chance of
                framing the rare, and ever rarer, thing that might be worth saying.'"
                <br />
                <br />
                "What amazed me about birdwatching was the way it changed the granularity of my perception, which was pretty
                'low res' to begin with. At first, I just noticed birdsong more. Of course it had been there all along, but
                now that I was paying attention to it, I realized that it was almost everywhere, all day, all the time."
                <br />
                <br />
                "That campaign was about a demarcation of time. So it’s interesting, and certainly troubling, to read the decline
                in labor unions in the last several decades alongside a similar decline in the demarcation of public space.
                True public spaces, the most obvious examples being parks and libraries, are places for — and thus the spatial
                underpinnings of — 'what we will.'"
                <br />
                <br />
                "In a public space, ideally, you are a citizen with agency; in a faux public space, you are either a consumer
                or a threat to the design of the place."
                <br />
                <br />
                "Connectivity is the rapid circulation of information among compatible units — an example is something getting
                a bunch of shares very quickly and unthinkingly by likeminded people on Facebook...Sensitivity, in contrast,
                involves a difficult, awkward, ambiguous encounter between two differently shaped bodies that are themselves
                ambiguous — and this meeting, this sensing, requires and takes place in time. Not only that, due to the effort
                of sensing, the two entities might come away from the encounter a bit differently than they went in."
              </p>
            </NotesEntry>
            <div style={{ height: '25px' }} />
            <NotesEntry ref={this.an_attempt_resegregate_lr_notes}>
              <p>
                <b>October 2019</b>
                <br />
                <br />
                "It was a shockingly brazen proposal in the town that holds a rarified place in the collective
                national memory over the fight for school integration. Less than a lifetime ago, the desegregation
                of Little Rock’s Central High School became a nationwide story...And now, in 2019, the state had
                proposed a plan that many residents argued amounted to an attempt to codify separate and unequal
                schools in the city."
                <br />
                <br />
                "The tensions over the desegregation of public schools in Little Rock did not leave when the news
                cameras did."
              </p>
            </NotesEntry>
            <div style={{ height: '25px' }} />
            <NotesEntry ref={this.miseducation_notes}>
              <p>
                <b>Early 2019</b>
                <br />
                <br />
                "Every person has two choices for how to cope with any aspect of society that is uncomfortable: act
                to change it, or surrender. Miseducation is the art of teaching people to surrender."
                <br />
                <br />
                "The aftermath of that trauma, of being taught to diminish one’s own self-worth, to question one’s very
                right to take up space in the world, can engulf entire lives. Given the booster shot of a school or
                education system, it can swallow whole communities. This makes miseducation so enticing as a means of
                social control that it recurs again and again, in an endless variety of contexts."
                <br />
                <br />
                "The children’s native tongues were clipped from them, their hair was ripped from them, their clothes
                were stripped from them, and they were sent to live in the white culture, in hopes that they would
                find white tongues and hair and clothes. In many cases, they did not. 'As a result,' the report found,
                'many return to the reservations disillusioned,' bereft of the great asset of their cultures. ¶ <i>Grandma,
                I don’t understand you</i>, they would say. And their grandmothers would respond, <i>Then who are you?</i>{` `}
                ¶ Never forget that a school can be a curse."
                <br />
                <br />
                "In <i>The Miseducation of Lauryn Hill</i>, the artist expounds gorgeously on the hard-won knowledge she earned
                on her ascent to the height of the music industry and into motherhood—lessons on love and money, fame and
                family, power and principles. Twenty years later, as Hill toured with these songs in 2018, the album still
                felt like a message out of time, as resonant as it ever was, despite the fact that Hill was just beginning
                her 20s when she made it. In the confidence of her flow, the lavish rasp of her alto, the iconic,
                unmistakable production choices, she sounds impossibly wise, wiser than most grown-ups could ever hope to be."
                <br />
                <br />
                "In the late ’90s, when <i>Miseducation</i> was recorded, Ras Baraka was an activist and educator in an occupied
                school district. The state of New Jersey had recently taken over control of Newark public schools. That was
                still the case in 2010, when Priscilla Chan and Mark Zuckerberg gave Newark $100 million to transform its
                education system. The gift, as Dale Russakoff recounts in her definitive book, The Prize, reflected a grand
                bargain between Zuckerberg and Chan, Newark’s then-mayor Cory Booker, and New Jersey’s then-governor Chris
                Christie. The three parties sought to demonstrate that with the right leadership, empowered by the state
                to put in place new, proven approaches to education, Newark’s schools could become a model for cities
                around the country in only five years. That aim, Russakoff argued, helped to doom the popularity of the
                group’s reforms among residents. 'The language of national models,' she wrote, 'left little room for
                attention to the unique problems of Newark, its schools, or its children.'"
                <br />
                <br />
                "If a school is devised purely as an escape route to a different world, he believed, then it will teach
                students only the information required to exist in that other world. The students will emerge knowing
                nothing about their environment except why and how to leave it, leaving them incapable of understanding
                it, much less improving it."
                <br />
                <br />
                "'If you understood who you are,' Ras Baraka once said, 'you would understand that the world belongs to
                you. And you shouldn’t claim a piece of it, you should claim all of it. And when you begin to claim all
                of it, you fight for the whole of humanity.'"
              </p>
            </NotesEntry>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
