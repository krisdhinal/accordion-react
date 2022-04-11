import React from 'react'
import { MdOutlineLibraryBooks } from 'react-icons/md'
import Question from './Question'
import { questions } from './data'

const Faq = () => {
  return (
    <section className="faq-sec">
        <div className="container faq">
            <div className="title --center-all">
                <MdOutlineLibraryBooks size={30} color="orangered" />
                <h2 className="--mb2">FAQS</h2>
                <p className="--text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla orci mauris, commodo nec dolor ac, mattis venenatis diam. Duis ex ligula, vestibulum eu est quis, porttitor vestibulum nisl. Vestibulum semper auctor tortor, nec condimentum mi lacinia quis. Duis quis ex rutrum, posuere dolor et, lobortis orci. Donec eget lorem at odio condimentum blandit ut in ipsum.</p>
            </div>
            <div className='questions'>
                {questions.map((question) =>(
                    <Question key={question.id} title={question.title} answer={question.answer}/>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Faq