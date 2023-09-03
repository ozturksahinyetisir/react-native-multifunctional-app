import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Information from '../../../components/Information'


export default function CoursesInfo() {
  return (
    <ScrollView>
    
      <Information 
      title="Angular"
      imageSource={require('../../../assets/angular.png')}
      desc = " Angular, Google'daki Angular Ekibi, bireyler ve şirketler topluluğu tarafından yönetilen TypeScript tabanlı özgür ve açık kaynaklı bir web uygulaması çerçevesidir. Angular, AngularJS'yi oluşturan aynı ekibin eksiksiz bir yeniden yazma işlemidir.  "
      />
      <Information 
      title="Kotlin"
      imageSource={require('../../../assets/kotlin.png')}
      desc = "Kotlin, Java sanal makinesi üzerinde çalışan ve ayrıca JavaScript kaynak koduna derlenebilir, statik tipli bir programlama dilidir. İlk geliştirme Sankt-Peterburg, Rusya merkezli JetBrains programcıları tarafından yapılmıştır. İsmi Kotlin Adası'ndan gelmektedir."
      />
      <Information 
      title="Bootstrap"
      imageSource={require('../../../assets/bootstrap.png')}
      desc = "Twitter Bootstrap açık kaynak kodlu, web sayfaları veya uygulamaları geliştirmek için kullanılabilecek araçlar bütünü ve önyüz çatısı. Bootstrap, web sayfaları veya uygulamalarında kullanılabilecek, HTML ve CSS tabanlı tasarım şablonlarını içerir."
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({})