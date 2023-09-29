<script >

export default {
        name:'consent',
        data() {
            return {
              checkOne: false,
            }
        }
        
    }
</script>

<template>
  <div>
    <img src="https://www.popticles.com/wp-content/uploads/2022/03/Toms-Logo.png" style="width: 200px;margin-bottom: 10px;" class="centerImg"/>
    <h2>TOMS THAILAND MEMBER</h2>
    <div class="container">
        <div class="row mt-3">
            <div class="col-md-12">
                <h2 class="text-center">Privacy Agreement</h2>
                <div id="consent" class="consentDiv" disabled>
                  <p>At Omega Grit, we are dedicated to safeguarding your privacy and ensuring the utmost security of your personal information. This Privacy Policy elucidates how we collect, utilize, divulge, and safeguard the information you provide when using our lead form.</p>

                <h3>Information We Collect</h3>
                <p>When you utilize our lead form, we may gather the following information:
                <ul>
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Company name</li>
                    <li>Job title</li>
                    <li>Any other information voluntarily provided by you</li>
                </ul>
                </p>

                <h3>Use of Information</h3>
                <p>We may employ the information collected through our lead form for the following purposes:
                <ul>
                    <li>To contact you regarding the services or products you have expressed interest in.</li>
                    <li>To send you marketing materials and promotional offers, if you have consented to receiving such communications.</li>
                    <li>To enhance our services and customize our content.</li>
                    <li>To adhere to legal obligations.</li>
                </ul>
                </p>

                <h3>Consent</h3>
                <p>By submitting your information through our lead form, you acknowledge that you have perused, comprehended, and assented to the terms and conditions outlined in this Privacy Policy. You also grant us consent to use your information for the purposes mentioned herein.</p>

                <h3>Disclosure of Information</h3>
                <p>We may share your information with third parties under the following circumstances:
                <ul>
                    <li>To fulfill the services or products you have requested.</li>
                    <li>With our trusted service providers and partners who assist us in operating our business.</li>
                    <li>In response to legal requests or to comply with applicable laws and regulations.</li>
                </ul>
                </p>

                <h3>Security</h3>
                <p>We take the security of your personal information with utmost seriousness and employ appropriate technical and organizational measures to safeguard it from unauthorized access, disclosure, alteration, or destruction.</p>

                <h3>Your Rights</h3>
                <p>You have the right to:
                <ul>
                    <li>Access and review the personal information we hold about you.</li>
                    <li>Rectify any inaccuracies in your personal information.</li>
                    <li>Withdraw your consent for marketing communications at any time.</li>
                    <li>Request the deletion of your personal information, subject to legal requirements.</li>
                </ul>
                </p>

                <h3>Contact Information</h3>
                <p>If you have any questions or concerns about these Terms or our privacy practices, please contact us at:</p>
                <address>
                    Omega Grit Co., Ltd.<br>
                    4, Naradhiwas Rajanagarindra Rd.,<br>
                    Yan Nawa, Sathon, Bangkok 10120<br>
                    Phone: +66 98-278-9262<br>
                    Email: <a href="mailto:hello.omg@omegagrit.com">hello.omg@omegagrit.com</a><br>
                </address>

                <p>By submitting your information through the Omega Grit Company lead form, you agree to adhere to these Terms & Conditions. Omega Grit Company reserves the right to decline or annul any lead form submission at our discretion.</p>
                
              </div>
                
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="privacyCheckbox" v-model="checkOne" value="agree">
                    <label class="form-check-label" for="privacyCheckbox"> I agree to the privacy policy</label>
                </div>
                <button class="btn btn-primary mt-3" id="nextButton" :disabled="!checkOne" @click="$router.push('register')"><span>Next</span></button>
            </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 1.6rem;
  top: -10px;
  text-align: center;
}  
h4 {
  font-weight: 100;
  font-size: 1.4rem;
  top: -10px;
  text-align: center;
} 
.consentDiv {
    overflow-y: scroll;
    height:350px;
    width: auto;
    resize: none; /* Remove this if you want the user to resize the textarea */
    border: black;
    border-style: outset;
    margin-top: 10px;
    margin-bottom: 10px;
  }
.centerImg{
    display: block;
    margin-left: auto;
    margin-right: auto;
}

button{
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    border-radius: 4px;
    background-color: #1cc5e3;
    border: none;
    color: #FFFFFF;
    text-align: center;
    font-size: 20px;
    padding: 10px;
    width: 100px;
    transition: all 0.5s;
    cursor: pointer;

}
button:disabled,
button[disabled]{
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}
</style>
