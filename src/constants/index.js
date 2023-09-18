import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    android,
    py,
    java,
    aerophilia,
    linuxworkshop,
    c,
    challengers,
    coding_ninjas,
    Gameplaying
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      // title: "Web Developer",
      title: "Software Development",
      icon: web,
    },
    {
      // title: "React Native Developer",
      title:"Machine Learning",
      icon: mobile,
    },
    {
      // title: "Backend Developer",
      title: "Computer Vision",
      icon: creator,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "Node JS",
      // icon: nodejs,
      icon: py,
    },
    {
      name: "TypeScript",
      icon: java,
    },
    {
      name: "android",
      icon: android,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    {
      name: "Three JS",
      icon: threejs,
      
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "c",
      icon: c,
    },
    {
      name: "docker",
      icon: typescript,
    }
  ];
  
  const experiences = [
    {
      title: "First year of Engineering",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Nov 2020 - March 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Vision Based Classroom Monitoring software",
      description:
        "ongoing project for our college (Sahyadri college of engineering) : Monitoring classrooms using AI, machine learning, and computer vision techniques",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "ML",
          color: "green-text-gradient",
        },
        {
          name: "computer vision",
          color: "pink-text-gradient",
        },
      ],
      image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPkAAADKCAMAAABQfxahAAABaFBMVEX///8sXkX///3//v/JYz3///wpV6T8//8nVqT8/v+Tp8gYUKH4+vv19/uru9V/l8Wpt9YUTKEITjAARpzS2ufd5OnDzt2qurEZVDcAQZs2X6gnVaYIRZ42YKQkUqYoWKC9yN379vHe5uLeqpXNcU5GaaotXUfGUSTNfWEAM5YhXkXzn2MAPJkARZfx2dHDSxUATSvu9PG3xL7MZjjKWTH2iDLacTnBYkDxgSFshbYAOZEAQKDQ2Ojq7fTZ4+oAMZdferfnz8Hkw7ThtqrfopHz6eDWjXjFRQ6/TRXcnozUhmvNelbbqJDj6+XH0st8lYhZemk/aFOYqqFegWzp2MrETSbhvKaIppdKdl61v7puhXizdVuPWjeHYT19X0RzYkFgXkVKX0M1Xj5PXUWjXTvTaVLwm1vbhlXIf1vkeDH18uTtkEfxqXfAXzDGWTr3zav1u4+9j3fmawBLcKMAIZOAnL9QcbUAFYdFIgO0AAATsUlEQVR4nO1dC2PaRraejBhJ6IEQAowsQAKMMS6PYJM4JEjGxtjYXtuxkybZ3Pb23d1222TvJrh//56RABMbt06yGxZ3vrYYjUaj8805cx4joAgxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAw3BAY/hO4Ke2Y88/dXoT911yvtrXdLRQKOzs73e3tWi8HjQIms5XtP4zc02e7S81SfW+vDuj3+3X6phRaKWz3Zi3bfwZYEFBua3/DZ7nfBT33coQQnKP6f7ZzsFGCMwfdnuDbxW0yfCG3fVDaKx3+ZStQrdI4yuePj/P5o4biN+Rq3d1QfW9jpwbkp3iCeUVtv7nX3N+i67lxvHDy+PROKha7G6NIrS6/eHm2lgfCqNdd6ddDhR7V+m3Qu7C1Uu8fbIEDO1o4WY6lUqt3LmE1lYrdeXx2DOxz29B5ZUsQuPmnvh2qr3dB2/mzU2B9mfQEwAyeLDRA84VX9dD2fHt6TkBPD+uhLkGNBaD9O6wv2D9ZExC3vdHf2BZmLf5HINzb/bz0DKOjkykmfi355edH1FL6h7VZy/8RKNT3c8A7dmPaQ8W/zCPUbR7OWvyPQOHznPD8PXkDlu/EXh6hpZU5jm+FUi5/9315A/Pl5bsL88889v7MAamA+dyCMf9Q5vObzTDmU7H8J2UOufqd01NaukCSc3USbi/z1OO1I5qa40Z+4eTPxDy2Bmcb+UaQm5/+eawdiJOzZVqdP4YC5c/DfDn1HDVOg9JtNXZ6hE6v5re3Mp4v33l5jE7GNevqsnAt87lNXq9hnjo+Rk8uyKbWrrX228b8buMYnV00p56/uHU6F6av87vKGkYvL9pPp+Q0c86c6vzoKvPUcQOC2vHju8O1Pi2ZS62hjYNZi/8R6NZ7jSlR7THK063G/AnkcdfksMA8tDtr8T8cwtZeDU1hnjoBla/lwZaPX16zHRs7Rv39Wcv/4RBqe9vT0pTl1dNjhI7W1vLwejZ1czJ2lKt3Zy3/h0PI1QvoZAqx5dWYn7zl1+gMTDP4VaFW35q1/B8OLIQO0NkUc172a7UToN1YyKPGlB4vqI+Ytfwfg90QOr62QIfMdQGWeh4tXKEO+e1uaI4fs2CqOOGqRk/Haz92mkd/VZQrPVLHKDTPQQ2hHripJ1d0fXIycaQIa1e84HJK6fWfzVr4j8PGyhRbfrl20QThaw29uER89SUqzPcyR2innrviwFZfNi4iGaSpa/iyd4c8ZimE5vmRIkR0MPeTK8zRwtjtUZ0fX56bZVSrPxPmd18CUR+3tIQuFy3AHJ0M21IvUD5/uT5PnaHdfg7POfNu/Sl6vHqFOVq7E0ulUrEXDbRwJctLNXKlOU7afQgEl1Yuh3SfOVKOz06eQy6zcCXeg8r3592/+UqHquXJ8js+7PRsIR98JAo1TqYkcI1cfb6DeQDSPKQr/R3qYOap05Ozs+ePp5Rqsb+i3VJvvj8hhH0n1a1vT03eIXOfWqE+RjVaoGJufndkkCBASCbcUjMnTKlVr0GsQeAChAkOz1r+DwdW/GSkB476KLUa4Bq+qyNAElPoQ30qKMoc23u3Xmo2Q6HDjV8Pdv7niy+//N+vvvr6u+++ASx/+22w8r+Fd9988913X3/91VdffvnlF99/v7sSCoXWm8153pJB20Cb0lgPNZu7uz801ymlUNM/bobWX4Xg7zp9aZaa6z8sHR4213eX4KyP5s6sxf8AYAxWLoyZUxq92nbuYP0V6TabW4VXodrBVrde2A7t9kLrv9Z6vR4E8F6t9rSf2x1f4jMXwNPNms77gPzy42eAv4XGyHX3D5vNQi3XLNX+UqrnVlbwIbdUquV2mqXcQfPv6FVvt76ESr0x89Df6BA//vLzfBUuuX88eHDv3k9jFs2DrR7ebeY2erv9Wq7XEw5LBVRoHvaWcs1+7uBVP7dSy/0s7NYnmN+HER784+dp3/74bwb5kTLfGNPYXnnV2yn0tp729mr7oPPD0DoCw+9t0UT1oB9Coac79d5Ov7c/XiH3gfiPuVkTeW8Iwi8PJpiv7zztdX/tHZaaZKVXaIbwYWgJh5bIq+Z+rgTLPFcobReaK7VQd0Ln9+59hudM41wYEeH1A2rt674/hxhVr9epP/+12XwVWg/RKVkJLYHmN1bgAJrXS6VQqFSq92kc9C+7f+/Ba6h4Zk3m/RDGwj/B2u/du78OJvtayVHHvVUohXYL+99///3GJUDTF//X3V5qHlA3n4M5u7d+n17+4J/zpnNw7j5xyv2nB6+HzQJEuRpqPImtXkFsAZHd+q6A6D9bD366P7z6wWfztfWMlR8fXOBfr8cnaqE+ROm1u5dy2NjjPOpt7I2eJr3+1/hacO5z5eOEnECrFYFQ5HLDpYoxJ+QO+ks9KMondyNSqQVIdPvNp8Mv8mGcy9GvdNERkEDmajsOC9fbaLf5eQGj/JMR99XYSQP1VuorOXS1JKe54Hxvx12AQ72/74W2ETp+Qr/Ykoqd5BEplOrdqd9XvVUADW5t7B1u0Q8O3E2dNcAKQnsHPSTcFt3+DjiBdF/Vl7YJUiDN7YbqP8zx4+L3AoZEBwjvhbq92n6TTsFcObGPAiVKtg/r/X79YAvdrm/g/iHol5N7O925Ctb/JmB/gxHC9awFYWBgYLgG/vOjS06Km3wsxHF4nJz57dw7py/OT7ZCExdgsg1dbgu6/XuIvCd8yuT3toWxj+EBCTZY8ESeisnodxXwxO4L9KBV3jthHvpBC568eIbFjBJPOk5cfadNBSgXPeAoPHEG4XfPq6Pzkx2DZr/jxKM19Wqj8s5YnwhQiLot3dB13Ui33HFRyqGikTbeDAuvMJZM3XSCC5BlVHUFaY+qVVEZmsnArKZtxT9Z1dOt8ehaWg8gFzUvMAoMVwdIy5lB0BipVCvRT8V4BIzbumzzIg//ikZ82EpwPA0thhtIC8xlUXeCC7hFyxIVLGQsUR8E3b2qJRoe7do2LNHSG6PRNVkMwIuyIQVtMj9ssy0xa0ZoU0Tn9U/OnCi2LWarmSJv8Fm+qg4XKxrIwFyXLpjzF8zhjEJQ0rAtw0PUPt5k+ewA0XqlBSR5OTpK4TWYVN0Ai5ItmzeC0YC5bVCkdZht0/OZ25+eOYoYvNyium3bILNEAvtt6L4R6AGBS8xBXwrhcEu2xQ7iCE6aFs8rNIVVdbiIzy5iEh4x151EIhGPFGHAqhcwt3gX2hJehLctXUMz0jkIZ1VdEgaX65iyXgy+coId0EdRtGTnOubgmxuiZacdTASet80kjYo4Ilti0ebTyWEar8k8XUEwOJ2nbAcFzEX/JIccg7cyaGbMs6KcBNkETtEkKToMbUXbqnomL77xfyhhGnN4C4KLvIDgnNyi3ThcBGOPw6S1UOArgXl66DvUKi+aNHxQnQ/vrRoib6NZMQdrF3UtPtwiJMECddNiVkMdkQdzuMQcoRHzMOoAZ4lauKz6u47xKi8PUAbs2g26TjBHrSyfpkNMMI+DZyyiGTHHKnWzclpsRWAVYp8AVaMFEoNAsu+VfObZgROhcMY6R64uWjzMjxEJfkNDy9pg3FFZlKWRh7tgTidPgm7Ut/sNYfeNSJtmxDxM2kYWFqqd1Y1zJ5BXCNuimIFJgZhk0wXrM+ezQWSmvm/IHNjYwB38nH+oZG2riIhbBf8ejD7JHOhBAADmYOHnxWIxs1ilwU5Bs9I5xomOmbUsG8SFHMSnkARJJEy9Em84I53zogWBnL6MmWNShGhlQ9j3lzW4xTRVYceyjDa+zBzOypqvc5hniCM2b8lGxsWzYk7lR55UlNOgC17XfKsFxlU/0MlUn0PmdqYYwL5gjuKwauUgRRHQG1Ah9WEwceDyaFybYI4nmaf9WM5ryeDcrJhTslhNDrIgi+99XTDoTBLggHhpd+ThhmKii3VOk9wsb/gJP9iOKVqZOL0MJlH3lTmp8yh1hwFz0Ys7RfCLLSUIATNhzjXceD54q4IwOjVuieYj/qIGCwdphXeiGp5gDuHPGjJHw7SPugKe5kS0aZI5nNZprjqM5wpEQDkT1CkzYd5+mH4UVBiYRHzZMCh1lFrTXNQWsDA9nlPAbA2ZCxCtxhfy1uJlnS9avJlAo6iGiQupDeQ2NJrMhLlq8LauBvsMmk+PtKFY4TMBwO+lk+gGzDH1YOALAsA7naZHQQ7n96VZ4eIoe6XD4Igu2ukInhVzmo1YHVpcURfEm7A8Rx6d0gGZwMfdiDlkKkZ72BqVrSxN6yBv9+u/cAPsKUhkJjIZuMLyc57ZMKflqCW3NI3WFOCSsZoGF004f9uEKODdqZv/I+YE0j6wFDLcvFGrNm82CGUuLgJsWbd4vYUudA7wA3+2hWZUq4Fa05ZoZ2khzeu26isAos9ojwLSeppmTdTnYahS+UkPV/V1LslDr+ajZflHGnV2vF/9W+k3Qf0GkyEOd+sg8QfzIjOqzzmcXDR08LNZPd1SECfYRrXSHm/OxCuyAVW7ZBoVx2/A2ILaesw8U9XLKv3wmGzoFW88bLKiGzLo/FGw/WKkjaIzrNkrcDDap+zQ0r2BomXZ/PTWTveb2tFBS5Mclzpa1YGIfPFwkND4rGIPXt2JlvHMDA9wcNnoKiyMLwsQd0e/jkeC8YNu9CrHxQloSnwauldwy56C4kt/R++Ge75ccBwcQZThuIvzE93Go9A33GgQ2tm/btQL43fvNfHmihz4nSPuopF7Zy+bC+7qN1B5b7w5zRFfomAfneMoO3glEzv8ghAO0xXHkcB6ffo+Dw4P980F/6NQ9BM+HLgEAu/CMAT8ocNywy9qCIGcBMajDw1o74lHD8N5FOAU3Wr3tzD8ieP8Xzwno+kGCcO+HPSzWLQTCfsKGsKXi9zsmyH+dWTopgm+ZNNcQMv/oa/hGYJGfchohuA8vSf2P99E/1Kh8GjQoRZGE+c/ZuCGGoU+wc6WMNTlsB+hGiEcHj2TmBSKBLcM5B4fBs8xLkT8IySKZhbyZO9NRZcIakn0HsUI/XjfomhlH6nYWXxoR7FrQ+np75ULrarZUnGUz2ZND+6VEcVs2o3wKmrzUMYvViBOqXI7KceRW1Ud28pCMF6E3mlXsrMWOO9BC2U0yNwGkKXrlSLNYTisGTbdecRuFmKmJoIccTlKsFsFWRYdcK8yvCFqy4SbEw2G0yNxuUgLRsezIMG1UacDYVVLVq3F8WbP70GpthLS27iabnlJqJrP6R4ngrScw4ohtdsOaZclT3rrqA+j7WSSTmXHTsaLPORfbeqWOWRocIKLGi3UNnG8PPAibx2l3E6mi9gtq47utJNtrMNYSUWy20ntIdI6iOZxLQ1pVcdrVeh8um9dyd+Wc03IgxfpRrZmLGLspqGilSFZblWLtFZ4045DFt86h+HcuGG6ip52vArcI4nOTQdpLTUZNR3nBo9inApYWVKJGgLda0Mdn7nsMzcdRVVRi+6keA21klT8RzuJTdCRW25HbYjO1FLTEdotapvteBoN6H5ZXFEroPNqtAHMZfpICAedpEW44aZAmYsZYC6UQZnEC1OrLXb4JF3cbrUjuXZHQooeqSSRa1gashykViKVOIpvQtrccFGrBcPhtnzutIsZJ7HpqWoDd3gZgzlBJ/UmQUiS/T8DuqubfKROMpfNSkVGmQGKQxBXjXRl8w2ca5epJVWcqG6YRcpcr5bLaRQ914rAvDNA3kCKqJV4kpeMREWNyA/Lm1HEVysVk+6xZWAtAHMxIke0AUwgigwkj6aoGXNAaOLjmtFisgOrzjGAIHYrkXKcd1CER0UNEklEBpJEWnK58jbRrkqapC068fTDymYLnUd5SRoyvwGiVaokTqK1sPNIGDOHdWAmSaOBOi0UH1ga6Jw0qGTxMgiqlp2I5Xoe/Z9spCNEgfyqKOgtnVpIfLDYUoC5iBY7Bui8oSgq1Tl0knivCCYEzGXHSXc0BXQeHZRpAcMPkiZdqMh96FU7UWDeyUhwvVpuaEVY58Wi1JHDyYoKak3jVosoKmkbcbuYFMHaEwrIdh5pm62bM0/AzeNvk95mBKkgVUfDgoLEKFYEsHYkKJgamZrRlEobheljzXC2hfGgokZFP6oRZESo2UeLsFh04pTbmBR95jJpm+mGoys02OkRiI0YrN1ND5DPHBV1DRXPVZhKYK5C0qs9isDMwgoppuMdSTU1bSBHlbIrGFUn8QiODEcxB3CrRwIQFASokwXDUG3HK7sEpD6PohbdImyXb8QckmGrDFyksmXaLio+MoyyIFcNI92AzDkNCtbKYoVvq+VqWqaGTuKGIZsOlgx6NTB/CJ3LSbBGUnyoosGm9UhOqm/bjhkmrU3XqUD6nkEmZOHlOF1akbdt7RyZEeJtDpC7aFrlN3T5DMyi0aHju7+p2kPhjQR9wf3r7m8eBpep0ScNrQxKmrJe0VDLNAxTam9CJQRDeZtwj4dCRoK1AV7S+e0Gnp3GajeZIOCq3GQcorP/IIt4CfgHex4cKHCm7UF6QQ/iCvVFSrutQrkZ1B2Y+N1UNwF+GMKSPw5Mj9KAi1RPceGsl/CvTsABgYFcN0E8KPUTLn0Ymxw+iE0kXUzjm+IR1YNziQTyB/BAAk+BvpC+exxR4eYQCeiorppAros9VaGj02sQTrgEN7xblmQzMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAw/Pfh/wE84YNwXvRonQAAAABJRU5ErkJggg==",
      source_code_link: "https://github.com/Guravjayesh/",
    },
    {
      name: "Lip Reading",
      description:
        "As part of our digital image processing lab, we trained an efficient lip reading model using LipNet and the TensorFlow framework. This model aimed to enhance performance in recognizing speech content within a video dataset by analyzing lip movements",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Tensorflow",
          color: "green-text-gradient",
        },
        {
          name: "Streamlit",
          color: "pink-text-gradient",
        },
      ],
      image: "https://images.theconversation.com/files/89910/original/image-20150728-11549-1xw04nt.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
      source_code_link: "https://github.com/Guravjayesh/LIP-READING",
    },
    {
      name: "Autonomous Drone Landing and Detection",
      description:
        "During this project, my primary focus was on object detection, specifically aiming to detect drones using the TensorFlow framework",
      tags: [
        {
          name: "Tensorflow",
          color: "blue-text-gradient",
        },
        {
          name: "Tensorflow-Model-zoo",
          color: "green-text-gradient",
        },
        {
          name: "Object-detection-api",
          color: "pink-text-gradient",
        },
        {
          name: "Transfer Learning",
          color: "blue-text-gradient",
        },
      ],
      image: "https://images.pexels.com/photos/15842363/pexels-photo-15842363/free-photo-of-drone-landing-on-hand.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      source_code_link: "https://github.com/Guravjayesh/AUTONOMOUS_LANDING-AND-DETECTION",
    },
    {
      name: "ONLINE GARDEN",
      description:
        "For the Android development lab, we successfully completed an e-commerce app for selling nursery flowers and quality gardening tools and equipment in our region",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Android",
          color: "green-text-gradient",
        },
        {
          name: "Firebase",
          color: "pink-text-gradient",
        },
        {
          name: "Mysql",
          color: "green-text-gradient",
        },
        // {
        //   name: "Volley",
        //   color: "green-text-gradient",
        // },
      ],
      // image: "https://play-lh.googleusercontent.com/s89R4abQQ92FS18ISsDRHMlBiw4jmDibyhH8YhTOYr6DvdKEwlXc62rf9VqDNU22ETg=w526-h296-rw",
      image: "https://images.pexels.com/photos/2928027/pexels-photo-2928027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      source_code_link: "https://github.com/Guravjayesh/ONLINE_GARDEN",
    },
    {
      name: "Whatsapp Chat Analyzer",
      description:
        "Unlock insights from your conversations. Track chat timings, daily volumes, and gain valuable emoji analysis for a deeper understanding of your messaging patterns.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Data Analysis",
          color: "green-text-gradient",
        },
        // {
        //   name: "Pandas",
        //   color: "pink-text-gradient",
        // },
        // {
        //   name: "Matplotlib",
        //   color: "green-text-gradient",
        // },
      ],
      // image: "https://play-lh.googleusercontent.com/s89R4abQQ92FS18ISsDRHMlBiw4jmDibyhH8YhTOYr6DvdKEwlXc62rf9VqDNU22ETg=w526-h296-rw",
      image: "https://www.smartprix.com/bytes/wp-content/uploads/2022/08/WhatsApp-about.png",
      source_code_link: "https://github.com/Guravjayesh/WhatsappChat-Analyzer--updated-version",
    },
    {
      name: "Smart India Hackathon",
      description:
        " supported the NAUTICA team in utilizing Intel RealSense Depth Cam and FLIR thermal vision camera for precise underground object detection and localization",
      tags: [
        {
          name: "Intel realsense cam",
          color: "blue-text-gradient",
        },
        {
          name: "Jetson Nano",
          color: "green-text-gradient",
        },
        
      ],
      image: "https://images.shiksha.com/mediadata/images/articles/1661251505phpPvaHoY.jpeg",
      source_code_link: "https://github.com/Guravjayesh/NAUTICA---DEPTH-CAM-OBJECT-DETECTION",
    },
    {
      name: "Walmart Data Analysis",
      description:
        "A full-stack app to analyze Walmart's data based on gender and age classification. The tools used in this project include HTML, Bootstrap, Ajax, Flask, and MySQL",
      tags: [
        {
          name: "Bootstrap",
          color: "blue-text-gradient",
        },
        {
          name: "Ajax",
          color: "green-text-gradient",
        },
        {
          name: "Flask",
          color: "pink-text-gradient",
        },
      ],
      image: "https://www.dailyexcelsior.com/wp-content/uploads/2017/04/wal-mart.jpg",
      source_code_link: "https://github.com/Guravjayesh/Walmart_Data_Analysis",
    },
    {
      name: "Art Gallery Management system",
      description:
        "A database management system to digitize artworks from galleries, creating a platform to store and organize collections",
      tags: [
        {
          name: "Java swings",
          color: "blue-text-gradient",
        },
        {
          name: "JDBC",
          color: "green-text-gradient",
        },
        {
          name: "Mysql",
          color: "pink-text-gradient",
        },
      ],
      image: "https://d197irk3q85upd.cloudfront.net/catalog/product/cache/95dbdf78ad5a0d4b547132f80fbac8f3/e/x/exhibition_banner_1.jpg",
      source_code_link: "https://github.com/Guravjayesh/",
    },{
      name: "Car Parking Space Counter",
      description:
        "Car Parking Space Counter to leverage surveillance footage to accurately count and display available free car parking spots",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Open cv",
          color: "green-text-gradient",
        },
        
      ],
      image: "https://www.geotab.com/CMS-Media-production/Blog/NA/_2020/Aug/reverse-parking/blog-why-reverse-parking-hero@2x.jpg",
      source_code_link: "https://github.com/Guravjayesh/",
    },
    {
      name: "Game Playing using Computer vision",
      description:
        "I automated game playing by detecting user actions on-screen using opencv and triggering key inputs using pyautogui to execute corresponding tasks",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Open cv",
          color: "green-text-gradient",
        },
        
      ],
      image: Gameplaying,
      source_code_link: "https://github.com/Guravjayesh/",
    }
  ];

  // Team Leading

  const Events = [
    {
      name: "LINUX WORKSHOP",
      description:
        "As a Robotics Team lead at Team Challengers, we had conducted the Linux workshop for all juniors who were willing to learn things, fostering an environment of knowledge sharing and skill development",
      tags: [
        {
          name: "Team Challengers",
          color: "blue-text-gradient",
        },
      ],
      // image: "https://media.licdn.com/dms/image/C5622AQF4Ef_ZqCUBvw/feedshare-shrink_2048_1536/0/1657818236790?e=1691625600&v=beta&t=ECG09_ENKDIqqaboioqwNJDgwf10QI59l9RZIE_GX0c",
      image: linuxworkshop,
      Linkedin_link: "https://www.linkedin.com/in/jayesh-gurav-6003a4215/"
    },
    {
      name: "Aerophilia 2022",
      description:
        "As a Ninja Entrepreneur and Coding Event Lead in Aerophilia 2022, I had the privilege of spearheading the collaborative efforts to organize two prominent events, namely Man vs Bug and Blind Coding, within the college",
      tags: [
        {
          name: "Aerophilia-2022",
          color: "pink-text-gradient",
        },
        {
          name: "Ninja-Enterprenuer",
          color: "green-text-gradient",
        },
        
      ],
      // image: "https://media.licdn.com/dms/image/C5622AQErS-J6FcmTqw/feedshare-shrink_1280/0/1668518875731?e=1691625600&v=beta&t=vobDBInGcRsHnhNMbh3pb3RmMWjh-UH8YM7lr3qy1UQ",
      image: aerophilia,
      Linkedin_link: "https://www.linkedin.com/in/jayesh-gurav-6003a4215/"
    },
    {
      name: "INTERNSHIP ON AI-ML-DL",
      description:
        "During the lockdown, I completed a 90-day internship in Machine Learning, Artificial Intelligence, and Data Analytics, gaining hands-on experience through diverse projects",
      tags: [
        {
          name: "AI-ML-DL",
          color: "blue-text-gradient",
        },
        {
          name: "Pantech Solutions",
          color: "green-text-gradient",
        },
        
      ],
      image: "https://www.pantechelearning.com/wp-content/uploads/2021/02/Machine-Learning-Internship-05-02-2021.jpg",
      Linkedin_link: "https://www.linkedin.com/in/jayesh-gurav-6003a4215/"
    },
    {
      name: "Robotics team lead -Team challengers",
      description:
        "Team Challengers, a student club at our college, engages in project development through active participation in hackathons and events, while also organizing educational workshops and events. I had the privilege of serving as a team lead in the robotics domain for Team Challengers",
      tags: [
        {
          name: "Team Challengers",
          color: "blue-text-gradient",
        },
        
        
      ],
      image: challengers,
      Linkedin_link: "https://www.linkedin.com/in/jayesh-gurav-6003a4215/"
    },
    {
      name: "Coding Ninja Enterpreneur",
      description:
        "As an Ninja entrepreneurial enthusiast, I successfully organized and facilitated prominent events and workshops within our college, featuring esteemed speakers sourced from Coding Ninjas, through a collaborative effort with the organization",
      tags: [
        
        {
          name: "Coding Ninjas",
          color: "green-text-gradient",
        },
        
      ],
      image: coding_ninjas,
      Linkedin_link: "https://www.linkedin.com/in/jayesh-gurav-6003a4215/"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, Events };
