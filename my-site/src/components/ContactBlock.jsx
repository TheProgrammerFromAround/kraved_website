
export default function ContactBlock(){
    return(
        <>
            <div className='contactDeets'>
                Contact Details
                <p>Email: kraveduae@gmail.com<br/>Phone: 050 1234567<br/>Delivery: only in uni</p>
            </div>


            <style>{`
                .contactDeets{
                    font-family: "lobster bisque";
                    padding: 2rem 2rem;
                    font-size: 4.5vw;
                    color: #6e484b;
                    min-height: 45vw;
                }

                .contactDeets p{
                    font-size: 2vw;
                }
                `}</style>
                
        </>
    )
}