document.addEventListener("DOMContentLoaded", function() {
    var doctors = [
        {
            name: "Dr. Atul Taygi",
            specialty: "Psychiatrist",
            image: "https://imagesx.practo.com/providers/dr-rajashekar-reddy-neurologist-delhi-e3c484cf-7541-4992-aa92-a2a1c2ced9b7.jpg?i_type=t_100x100-4x",
            experience: "10 years",
            education: "MD Psychiatry, XYZ Medical College",
            expertise: "Cognitive Behavioral Therapy (CBT) is a structured psychotherapy approach aimed at treating anxiety disorders by addressing maladaptive thought patterns and behaviors. It focuses on understanding the connection between thoughts, feelings, and behaviors to promote symptom relief. CBT techniques include cognitive restructuring, exposure therapy, and relaxation training. This therapeutic approach is evidence-based and commonly used for various anxiety disorders such as generalized anxiety disorder, panic disorder, and social anxiety disorder. CBT equips individuals with coping skills to manage anxiety symptoms effectively and improve overall quality of life.",
            Day:"Monday to Friday",
            Time: [
                { day: "Monday", timing: "10:00 AM - 6:00 PM" },
                { day: "Tuesday", timing: "10:00 AM - 6:00 PM" },
                { day: "Wednesday", timing: "10:00 AM - 6:00 PM" },
                { day: "Thursday", timing: "10:00 AM - 6:00 PM" },
                { day: "Friday", timing: "10:00 AM - 6:00 PM" },
                { day: "Saturday", timing: "10:00 AM - 6:00 PM" }
            ]
        },
        {
            name: "Dr. Rishabh Verma",
            specialty: "Psychologist",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCUTWTVS71v057PIlKpA6DdJl5ICU8UFp2cQ&usqp=CAU",
            experience: "8 years",
            education: "PhD in Psychology, ABC University",
            expertise: "Depression is often managed through stress management techniques, which aim to reduce the impact of stressors that contribute to depressive symptoms. Stress management strategies commonly employed in therapy include mindfulness meditation, relaxation exercises, and cognitive restructuring. These techniques help individuals identify and challenge negative thought patterns associated with stress and depression. Additionally, lifestyle changes such as regular exercise, adequate sleep, and healthy diet play a crucial role in stress reduction and depression management. ",
            Day:"Monday to Friday",
            Time: [
                { day: "Monday", timing: "10:00 AM - 6:00 PM" },
                { day: "Tuesday", timing: "10:00 AM - 6:00 PM" },
                { day: "Wednesday", timing: "10:00 AM - 6:00 PM" },
                { day: "Thursday", timing: "10:00 AM - 6:00 PM" },
                { day: "Friday", timing: "10:00 AM - 6:00 PM" },
                { day: "Saturday", timing: "10:00 AM - 6:00 PM" }
            ]
        },
        {
            name: "Dr. Sakshi Anand",
            specialty: "Neurologist",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMOFUu3IAJ-iw3xPz5mxDs-trzda2YG0kgbg&usqp=CAU",
            experience: "15 years",
            education: "MD Neurology, LMN Medical School",
            expertise: "Stroke and epilepsy are neurological conditions that may require different treatment approaches. Stroke, often caused by a blockage or rupture of blood vessels in the brain, requires immediate medical attention to minimize brain damage. Treatment typically involves medications such as blood thinners, rehabilitation therapies, and lifestyle changes to reduce the risk of future strokes.",
            Day:"Monday to Friday",
            Time: [
                { day: "Monday", timing: "10:00 AM - 6:00 PM" },
                { day: "Tuesday", timing: "10:00 AM - 6:00 PM" },
                { day: "Wednesday", timing: "10:00 AM - 6:00 PM" },
                { day: "Thursday", timing: "10:00 AM - 6:00 PM" },
                { day: "Friday", timing: "10:00 AM - 6:00 PM" },
                { day: "Saturday", timing: "10:00 AM - 6:00 PM" }
            ]
        },
        {
            name: "Dr. Abhishek Mani",
            specialty: "Geriatric",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRptE7lRe_QwtK6vaTm1Qt39BMSi4uhOdbIgw&usqp=CAU",
            experience: "12 years",
            education: "MBBS, XYZ Medical College",
            expertise: "Aging-related disorders, particularly dementia, present challenges in cognitive function and daily living activities as individuals grow older. Dementia encompasses various conditions characterized by progressive cognitive decline, memory loss, and impaired reasoning. Alzheimer's disease is the most common form of dementia, followed by vascular dementia, Lewy body dementia, and others. Treatment focuses on managing symptoms, improving quality of life, and providing support for caregivers",
            Day:"Monday to Friday",
            Time: [
                { day: "Monday", timing: "10:00 AM - 6:00 PM" },
                { day: "Tuesday", timing: "10:00 AM - 6:00 PM" },
                { day: "Wednesday", timing: "10:00 AM - 6:00 PM" },
                { day: "Thursday", timing: "10:00 AM - 6:00 PM" },
                { day: "Friday", timing: "10:00 AM - 6:00 PM" },
                { day: "Saturday", timing: "10:00 AM - 6:00 PM" }
            ]
        },
        {
            name: "Dr. Puspraj Sahu",
            specialty: "Pediatric",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT95evP5ez8BahojSpSzEflHBmpgrHta43Qw&usqp=CAU",
            experience: "7 years",
            education: "MD Pediatrics, ABC University",
            expertise: "Child development and immunization are intricately linked, as immunizations play a vital role in safeguarding children's health and development. Immunizations protect against serious infectious diseases by stimulating the immune system to produce antibodies, which provide immunity against specific pathogens. Vaccines are administered according to a recommended schedule starting from infancy to ensure optimal protection during critical developmental stages.",
            Day:"Monday to Friday",
            Time: [
                { day: "Monday", timing: "10:00 AM - 6:00 PM" },
                { day: "Tuesday", timing: "10:00 AM - 6:00 PM" },
                { day: "Wednesday", timing: "10:00 AM - 6:00 PM" },
                { day: "Thursday", timing: "10:00 AM - 6:00 PM" },
                { day: "Friday", timing: "10:00 AM - 6:00 PM" },
                { day: "Saturday", timing: "10:00 AM - 6:00 PM" }
            ]
        },
        {
            name: "Dr. Tanish Sarkar",
            specialty: "Psychotherapist",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZBGjSExANR-Gjf_-j0CrX_XKbLr2iieYITA&usqp=CAU",
            experience: "9 years",
            education: "Masters in Counseling Psychology, XYZ Institute",
            expertise: "Marriage counseling, also known as couples therapy, is specifically tailored to couples experiencing relationship difficulties or seeking to improve their communication, resolve conflicts, and strengthen their bond. The therapist facilitates open dialogue between partners, helps them identify and address underlying issues, and teaches effective communication and problem-solving skills to enhance the relationship.",
            Day:"Monday to Friday",
            Time: [
                { day: "Monday", timing: "10:00 AM - 6:00 PM" },
                { day: "Tuesday", timing: "10:00 AM - 6:00 PM" },
                { day: "Wednesday", timing: "10:00 AM - 6:00 PM" },
                { day: "Thursday", timing: "10:00 AM - 6:00 PM" },
                { day: "Friday", timing: "10:00 AM - 6:00 PM" },
                { day: "Saturday", timing: "10:00 AM - 6:00 PM" }
            ]
        },
        {
            name: "Dr. Daya Shah",
            specialty: "Therapist",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOZbBeI9yYkWvQEB35FExmH3xo5Tp460fKgw&usqp=CAU",
            experience: "11 years",
            education: "MA Clinical Psychology, ABC University",
            expertise: "->CBT aims to identify and modify negative thought patterns and behaviors that contribute to psychological distress. It emphasizes understanding the relationship between thoughts, emotions, and behaviors, and teaches practical skills for coping with challenges.->DBT, developed specifically for individuals with borderline personality disorder, emphasizes acceptance and change. It combines cognitive-behavioral techniques with mindfulness and validation strategies to help individuals regulate emotions, improve interpersonal relationships, and develop distress tolerance skills.",
            Day:"Monday to Saturday",
            Time: [
                { day: "Monday", timing: "10:00 AM - 6:00 PM" },
                { day: "Tuesday", timing: "10:00 AM - 6:00 PM" },
                { day: "Wednesday", timing: "10:00 AM - 6:00 PM" },
                { day: "Thursday", timing: "10:00 AM - 6:00 PM" },
                { day: "Friday", timing: "10:00 AM - 6:00 PM" },
                { day: "Saturday", timing: "10:00 AM - 6:00 PM" }
            ]
        },
        {
            name: "Dr. Nupur Sharma",
            specialty: "Neurosyic",
            image: "https://www.apollocradle.com/wp-content/uploads/2019/01/jasmin-rath.jpg.webp",
            experience: "6 years",
            education: "MD Neurology, PQR Medical College",
            expertise: "Headaches and migraines are common neurological conditions, but migraine is a specific type of headache disorder characterized by recurrent moderate to severe headaches often accompanied by nausea, vomiting, and sensitivity to light and sound. Migraines can significantly impact daily functioning and quality of life. Treatment for migraines may include medication to alleviate symptoms during an attack and preventive measures to reduce the frequency and severity of episodes. These preventive measures can include lifestyle modifications, stress management techniques, and prescription medications. ",
            Day:"Monday to Saturday",
            Time: [
                { day: "Monday", timing: "10:00 AM - 6:00 PM" },
                { day: "Tuesday", timing: "10:00 AM - 6:00 PM" },
                { day: "Wednesday", timing: "10:00 AM - 6:00 PM" },
                { day: "Thursday", timing: "10:00 AM - 6:00 PM" },
                { day: "Friday", timing: "10:00 AM - 6:00 PM" },
                { day: "Saturday", timing: "10:00 AM - 6:00 PM" }
            ]
        },
        {
            name: "Dr. Ashok Dewasi",
            specialty: "Pediatric",
            image: "https://lh3.googleusercontent.com/proxy/__opnU3hQy-pNljv81ZTE0ZF-KjupHzc6liJPVLqQanvfOQrxpuJguxPEZn2412NpFmWkZU6ugSeuJpOXCeo0u2k2uAqSf2B_FFGKdlS8PRTm2M0QWL-z4V3vWHxXsP9lBCutyUnLg",
            experience: "15 years",
            education: "MD Pediatrics, XYZ Medical College",
            expertise: "Child development and immunization are interconnected aspects of pediatric healthcare. Immunization plays a crucial role in safeguarding children's health and development by protecting them from serious infectious diseases. Vaccines stimulate the immune system to produce antibodies, providing immunity against specific pathogens, thus preventing illnesses like measles, polio, and whooping cough.",
            Day:"Monday to Saturday",
            Time: [
                { day: "Monday", timing: "10:00 AM - 6:00 PM" },
                { day: "Tuesday", timing: "10:00 AM - 6:00 PM" },
                { day: "Wednesday", timing: "10:00 AM - 6:00 PM" },
                { day: "Thursday", timing: "10:00 AM - 6:00 PM" },
                { day: "Friday", timing: "10:00 AM - 6:00 PM" },
                { day: "Saturday", timing: "10:00 AM - 6:00 PM" }
            ]
        },
        {
            name: "Dr. Pravin Desai",
            specialty: "Psychotherapist",
            image: "https://www.jpnatc.org/it/img/Gallery/faculty/narenderchoudhary.jpg",
            experience: "12 years",
            education: "MA in Psychology, ABC University",
            expertise: "Individual therapy and family therapy are two distinct forms of psychotherapy that serve different purposes in addressing psychological and relational issues.Individual therapy focuses on providing support, guidance, and treatment to an individual dealing with various mental health concerns or life challenges. The therapist works one-on-one with the client to explore their thoughts, emotions, and behaviors, identify underlying issues, and develop coping strategies to improve well-being and promote personal growth.",
            Day:"Monday to Saturday",
            Time: [
                { day: "Monday", timing: "10:00 AM - 6:00 PM" },
                { day: "Tuesday", timing: "10:00 AM - 6:00 PM" },
                { day: "Wednesday", timing: "10:00 AM - 6:00 PM" },
                { day: "Thursday", timing: "10:00 AM - 6:00 PM" },
                { day: "Friday", timing: "10:00 AM - 6:00 PM" },
                { day: "Saturday", timing: "10:00 AM - 6:00 PM" }
            ]
        },
        {
            name: "Dr. Radha Parekh",
            specialty: "Therapist",
            image: "https://www.woodlandshospital.in/images/doctor-img/Semanti-Chakrabarty-New.jpg",
            experience: "10 years",
            education: "MSW in Clinical Social Work, PQR Institute",
            expertise: "Combining counseling with stress management techniques can be particularly effective in addressing stress-related concerns, as counseling provides a safe space to explore underlying issues contributing to stress while stress management techniques offer practical tools for coping with stressors in daily life. Working with a therapist can help individuals develop personalized strategies for managing stress and improving overall well-being.",
            Day:"Monday to Saturday",
            Time: [
                { day: "Monday", timing: "10:00 AM - 6:00 PM" },
                { day: "Tuesday", timing: "10:00 AM - 6:00 PM" },
                { day: "Wednesday", timing: "10:00 AM - 6:00 PM" },
                { day: "Thursday", timing: "10:00 AM - 6:00 PM" },
                { day: "Friday", timing: "10:00 AM - 6:00 PM" },
                { day: "Saturday", timing: "10:00 AM - 6:00 PM" }
            ]
        },
        {
            name: "Dr. Sawati Mishra",
            specialty: "Neurosyic",
            image: "https://assets.lybrate.com/img/documents/doctor/dp/a5bc50317af63db022ddbfb1178e5c3e/Endocrinology-AnjanaBhan-Delhi-54cb89.jpg",
            experience: "8 years",
            education: "MD Neurology, LMN Medical School",
            expertise: "Headaches and migraines are both types of pain in the head, but they have distinct characteristics and causes.Headaches are a common ailment characterized by pain or discomfort in the head or neck region. They can vary in intensity, duration, and location and may be caused by factors such as stress, tension, dehydration, or sinus issues.",
            Day:"Monday to Friday",
            Time: [
                { day: "Monday", timing: "10:00 AM - 6:00 PM" },
                { day: "Tuesday", timing: "10:00 AM - 6:00 PM" },
                { day: "Wednesday", timing: "10:00 AM - 6:00 PM" },
                { day: "Thursday", timing: "10:00 AM - 6:00 PM" },
                { day: "Friday", timing: "10:00 AM - 6:00 PM" },
                { day: "Saturday", timing: "10:00 AM - 6:00 PM" }
            ]
        }
    ];
    
    var detailLinks = document.querySelectorAll(".content a");

    
    detailLinks.forEach(function(link, index) {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            var doctorDetails = doctors[index];
            var doctorDetailsString = encodeURIComponent(JSON.stringify(doctorDetails));
            window.location.href = "post-page.html?doctor=" + doctorDetailsString;
        });
    });
  
});

