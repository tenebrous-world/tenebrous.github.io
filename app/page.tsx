"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Stars } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = (index:number) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
    }
  };

  useEffect(() => {
    if (emblaApi) {
      const onSelect = () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      };
      
      emblaApi.on("select", onSelect);
      
      // Cleanup function to remove the event listener
      return () => {
        emblaApi.off("select", onSelect);
      };
    }
  }, [emblaApi]); // Dependency array ensures effect runs when emblaApi changes
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* 背景动画 */}
      <div className="fixed inset-0 z-0">
        <Stars className="w-full h-full text-gray-700 animate-pulse" />
      </div>

      {/* 导航栏 */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-black/80">
        <div className="container mx-auto p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/logo.png"
                alt="黑域游戏工作室 Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <h1 className="text-2xl font-bold">黑域游戏工作室</h1>
            </div>
            <div className="space-x-4">
              <Link href="https://weibo.com/tenebrousworld" target="_blank" rel="noopener noreferrer">
                <Button variant="link">
                  <svg viewBox="0 0 24 24" className="ml-2 h-4 w-4" fill="currentColor">
                    <path d="M20.194 14.197c-.285-.341-.64-.618-1.067-.83-.426-.213-.885-.367-1.376-.463-.492-.096-.847-.192-1.067-.288-.219-.096-.329-.208-.329-.336 0-.128.11-.271.329-.432.219-.16.47-.368.752-.624.285-.256.522-.592.714-1.008.191-.416.286-.927.286-1.536 0-.544-.11-1.024-.33-1.44-.219-.416-.505-.752-.857-1.008-.354-.256-.742-.432-1.163-.528-.423-.096-.83-.144-1.219-.144h-1.125v-2.4h-2.25v2.4h-1.125c-.39 0-.795.048-1.219.144-.422.096-.809.272-1.163.528-.353.256-.638.592-.857 1.008-.219.416-.329.896-.329 1.44 0 .608.095 1.12.286 1.536.19.416.428.752.714 1.008.285.256.533.464.752.624.219.16.329.304.329.432 0 .128-.11.24-.329.336-.219.096-.575.192-1.067.288-.492.096-.95.25-1.376.463-.427.213-.782.49-1.067.83-.285.341-.428.747-.428 1.216 0 .416.11.784.329 1.104.219.32.505.592.857.816.354.224.742.4 1.163.528.422.128.83.192 1.219.192h9v-1.2h-1.125c-.39 0-.795-.064-1.219-.192-.422-.128-.809-.304-1.163-.528-.353-.224-.638-.496-.857-.816-.219-.32-.329-.688-.329-1.104 0-.47.143-.875.428-1.216z"/>
                  </svg>
                  微博
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* 英雄区域 */}
      <section className="container mx-auto py-20 text-center relative z-10 mt-16">
        <h2 className="text-6xl font-bold mb-4 animate-fade-in-up">
          欢迎来到黑域
        </h2>
        <p className="text-xl mb-8 animate-fade-in-up animation-delay-300">
          专注打造精品 RPG 游戏体验
        </p>
        <p className="text-xl max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
          黑域游戏工作室是一个充满激情的独立游戏开发团队。我们专注于创造高质量的
          RPG
          游戏体验，致力于通过独特的游戏设计和引人入胜的故事讲述，为玩家带来难忘的虚拟世界冒险。
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Image
            src="/images/studio-01.png"
            alt="游戏开发过程"
            width={300}
            height={200}
            className="rounded-lg shadow-md mx-auto animate-fade-in-left"
          />
          <Image
            src="/images/studio-02.png"
            alt="团队协作"
            width={300}
            height={200}
            className="rounded-lg shadow-md mx-auto animate-fade-in-up animation-delay-300"
          />
          <Image
            src="/images/studio-03.png"
            alt="游戏测试"
            width={300}
            height={200}
            className="rounded-lg shadow-md mx-auto animate-fade-in-right animation-delay-600"
          />
        </div>
      </section>

      {/* 我们的游戏 */}
      <section className="container mx-auto py-20 relative z-10">
        <h3 className="text-4xl font-bold mb-12 text-center animate-fade-in-up">
          我们的游戏
        </h3>
        <Card className="bg-gray-800 max-w-4xl mx-auto overflow-hidden">
          <CardContent className="p-8 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:mr-8">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  <div className="flex-[0_0_100%] min-w-0">
                    <Image
                      src="/images/etudes01-01.png"
                      alt="Etudes01 游戏截图 1"
                      width={400}
                      height={300}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                  <div className="flex-[0_0_100%] min-w-0">
                    <Image
                      src="/images/etudes01-02.png"
                      alt="Etudes01 游戏截图 2"
                      width={400}
                      height={300}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                  <div className="flex-[0_0_100%] min-w-0">
                    <Image
                      src="/images/etudes01-03.png"
                      alt="Etudes01 游戏截图 3"
                      width={400}
                      height={300}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center gap-2 mt-4">
                {[0, 1, 2].map((index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                      selectedIndex === index ? "bg-white" : "bg-gray-500"
                    }`}
                    onClick={() => scrollTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            <div className="md:w-1/2">
              <h4 className="text-3xl font-bold mb-4 animate-fade-in-right">
                Etudes01 练习曲01
              </h4>
              <p className="text-xl mb-6 animate-fade-in-right animation-delay-300">
                这是一款精心打造的 RPG
                小游戏，融合了创新gameplay和引人入胜的故事情节。
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 animate-fade-in-right animation-delay-600">
                <li>独特的角色成长系统</li>
                <li>丰富多彩的世界设定</li>
                <li>富有挑战性的战斗机制</li>
                <li>感人至深的剧情发展</li>
              </ul>
              <Link href="/etudes01" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold animate-breathing transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-orange-400/50 rounded-full px-8">
                  开始游戏
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 max-w-4xl mx-auto overflow-hidden mt-8">
          <CardContent className="p-8 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:mr-8">
              <Image
                src="/images/coming-soon.png"
                alt="代号：弗罗里达 预告图"
                width={400}
                height={300}
                className="rounded-lg shadow-md filter brightness-75"
              />
            </div>
            <div className="md:w-1/2">
              <div className="flex items-center gap-4 mb-4">
                <h4 className="text-3xl font-bold animate-fade-in-right">
                  代号：弗罗里达
                </h4>
                <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold animate-pulse">
                  Coming Soon
                </span>
              </div>
              <p className="text-xl mb-6 animate-fade-in-right animation-delay-300">
                一款充满神秘色彩的RPG游戏，带你探索未知的冒险世界。
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 animate-fade-in-right animation-delay-600">
                <li>独特的世界观设定</li>
                <li>创新的游戏玩法</li>
                <li>精心打造的剧情体验</li>
                <li>令人惊叹的视觉效果</li>
              </ul>
              <Button 
                size="lg" 
                className="bg-gray-600 text-white font-bold rounded-full px-8 cursor-not-allowed opacity-75"
                disabled
              >
                敬请期待
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
      {/* 页脚 */}
      <footer className="bg-gray-900 py-8 relative z-10">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 黑域游戏工作室. 保留所有权利。</p>
        </div>
      </footer>
    </div>
  );
}
