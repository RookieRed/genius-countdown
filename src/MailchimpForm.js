import React, {useState} from "react"

export function MailchimpForm() {
  const [email, setEmail] = useState("")
  const [submitDisabled, setSubmitDisabled] = useState(true)
  return <React.Fragment>
    <div id="mc_embed_signup">
      <h2 className="section-title no-margin">Inscris-toi à la newsletter</h2>
      <form action="https://genius-cbd.us5.list-manage.com/subscribe/post?u=5f64f288c4941af07c9f8bb26&amp;id=8a41b6491b"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
            noValidate>
        <div id="mc_embed_signup_scroll">
          <label htmlFor="mce-EMAIL">Suivez l'actu du génie ! 🧞</label>
          <input type="email"
                 onChange={(e) => {
                   setEmail(e.target.value)
                   setSubmitDisabled(!e.target.validity.valid)
                 }}
                 value={email}
                 name="EMAIL"
                 className="email"
                 id="mce-EMAIL"
                 placeholder="jean.dupont@mail.fr"
                 required/>
            <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true">
              <input type="text" name="b_5f64f288c4941af07c9f8bb26_8a41b6491b" tabIndex="-1" value=""/>
            </div>
            <div>
              <button className="submit"
                      disabled={submitDisabled}
                      type="submit"
                      name="subscribe"
                      id="mc-embedded-subscribe">S'inscrire</button>
            </div>
        </div>
      </form>
    </div>
  </React.Fragment>
}