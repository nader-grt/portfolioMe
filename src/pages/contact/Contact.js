import contactes from './contact.module.css'

function Contact() {
  return (
    <>
    

    <div className={contactes.contact}>
    <div className="container text-primary">
    <div className="row mt-5">
      <div className="col-9 mx-auto">
      <div className={`d-flex justify-content-between  align-items-center  p-4  ${contactes.formsm}`}>
      <div className="col-5 ">
            <form className={`${contactes.Contact__form} shadow z-index-2 `}>
                <div className='mb-4'>
                <label>
                name
                </label>
                <input type="text"  placeholder="" />
                </div>
                <div className='mb-4'>
                <label>
                Subject
                </label>
                <input type="text"  placeholder="" />
                </div>
                <div className='mb-4'>
                <label>
                Message
                </label>
                <textarea type="text" col="20" row="50" placeholder="" ></textarea>
                </div>
                <div className='mb-4'>
             
                <input type="submit"  value="save" />
                </div>
            </form>
     
      
      </div>
      <div className="col-5 align-self-stretch  ">
        <div  className={`${contactes.card}  `}>
             <div>contact here</div>
             <div>contact here</div>
             <div>contact here</div>
        </div>

   
      </div>
      
      </div>
      </div>
    
    </div>
</div>
    </div>
    
    </>
  )
}

export default Contact