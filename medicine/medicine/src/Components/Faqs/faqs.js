import React from 'react'
import Nav from '../Navbar/nav'
import './faqs.css';

function Faqs() {
    return (
        <>
        <Nav />
        <div className='frequent'>
            <p >
            <h2>FREQUENTLY ASKED QUESTIONS</h2>
Although your doctor is the best source for answering your specific questions about
 erectile dysfunction (ED) and treatment with VIAGRA, you can find answers to common questions here.
            </p>
            <div className='question'>
            What is VIAGRA?<br />
VIAGRA is a prescription medicine used to treat erectile dysfunction (ED). You will not get an erection just by taking this medicine. VIAGRA helps a man with ED get and keep an erection only when he is sexually stimulated.

VIAGRA is not for use in women or children.

It is not known if VIAGRA is safe and effective in women or children under 18 years of age.
            </div>

            <div  className='question'>
How does VIAGRA work?<br />
VIAGRA works for men with ED by increasing blood flow to the penis so you can get and keep an erection hard enough for sex.* VIAGRA only works when you are sexually stimulated. It has been proven to help guys with all degrees of ED. VIAGRA usually starts to work within 30-60 minutes. And you only take it when you need it.

*Individual results may vary.
            </div>
            <div className='question'>
            When Should You Consider Using Viagra?<br />
Viagra can be a safe, effective treatment for men of any age. You should consider using Viagra if you experience erectile dysfunction that affects your sex life, whether it’s an occasional issue or something that occurs frequently.


            </div>
            <div className='question'>
            What Happens if a Woman Takes Viagra?<br />
Since Viagra works by increasing blood flow to the soft erectile tissue of the penis, it’s not an effective medication for women. Studies of Viagra in women show that while it does produce some minor benefits, it can also cause side effects such as nausea, flushing and headache.

Women with sexual performance or desire issues should not use Viagra. Instead, it’s best to speak with your doctor about treatment options. From hormonal medication to newer sexual drugs such as Addyi (flibanserin), there are now several similar medications for women.


            </div>
            <div className='question'>
            Is it Safe to Use Viagra and Other ED Medications Together?<br />
It is not recommended to take Viagra and other ED medications such as Cialis or Levitra at the same time. Doing so can significantly increase each medication’s effects, creating a higher risk that you will experience side effects such as headache, nausea and cardiovascular issues.

If you find that Viagra is not fully effective at treating your erectile dysfunction, do not combine it with other medication. Instead, talk to your doctor about increasing your dose of Viagra or using a longer-lasting erectile dysfunction medication such as Cialis.



             </div>
        </div>
        </>
    )
}

export default Faqs
