<template>
<div class="w-100">
    <div v-if="page_load" class="page-container container">
    <div class="loading" >

                <div class="item">
                    <div class="ph-item">
                        
                    </div>
                     
                </div>
                
                 <div class="item">
                    <div class="ph-item">
                        
                    </div>
                    
                </div>

                 <div class="item">
                    <div class="ph-item">
                        
                    </div>
                </div>
                <div class="item">
                    <div class="ph-item">
                        
                    </div>
                </div>
                <div class="item">
                    <div class="ph-item">
                        
                    </div>
                </div>
                <div class="item">
                    <div class="ph-item">
                        
                    </div>
                </div>
                <div class="item">
                    <div class="ph-item">
                        
                    </div>
                </div>
                <div class="item">
                    <div class="ph-item">
                        
                    </div>
                </div>
                <div class="item">
                    <div class="ph-item">
                        
                    </div>
                </div>
                <div class="item">
                    <div class="ph-item">
                        
                    </div>
                </div>
                <div class="item">
                    <div class="ph-item">
                        
                    </div>
                </div>
                <div class="item">
                    <div class="ph-item">
                        
                    </div>
                </div>
                <div class="item">
                    <div class="ph-item">
                        
                    </div>
                </div>
                <div class="item">
                    <div class="ph-item">
                        
                    </div>
                </div>

    </div>
            </div>
    <div class="section contact-section" v-else>
         
        <div class="contact-container" >
            

            <div class="row w-100 justify-content-center mt-3">
                <table class="w-75">
                <tr>
                    <td>
                        Full name
                    </td>
                    <td> Əli Babayev</td>
                </tr>
                <tr>
                    <td>
                        Age
                    </td>
                    <td> 19</td>
                </tr>
                <tr>
                    <td>
                        Education
                    </td>
                    <td> ADNA 3/4</td>
                </tr>
                <tr>
                    <td>
                        Mail
                    </td>
                    <td> ali.babayev@itcity.az</td>
                </tr>
                <tr>
                    <td>
                        Telephone (call)
                    </td>
                    <td> +994 50 872 85 90</td>
                </tr>
                <tr>
                    <td>
                        Telephone (whatsapp)
                    </td>
                    <td> +994 50 356 49 79</td>
                </tr>
                <tr>
                    <td>
                        Telephone (telegram)
                    </td>
                    <td> +994 50 356 49 79</td>
                </tr>
                <tr>
                    <td>
                        Instagram
                    </td>
                    <td> @alibabayev2002</td>
                </tr>
                <tr>
                    <td>
                        github
                    </td>
                    <td> alibabayev2002</td>
                </tr>
                <tr>
                    <td>
                        gitlab
                    </td>
                    <td> bhabhayef</td>
                </tr>
            </table>
            </div>
            
        </div>
    </div>
</div>
</template>
<style>
tr , td{
    text-align: center;
}
tr{
    border-bottom: 1px solid #ecf0f1;
}
tr:last-child{
    border: none;
}
td{
    padding: 10px 0;
}
td:nth-child(odd){
    border-right: 1px solid #fff;
}
</style>
<script>
export default {
    data(){
        return {
            page_load : true,
        };
    },
    mounted(){
        setTimeout(()=>{
            this.page_load = false;
        },2000)
    },
}
</script>