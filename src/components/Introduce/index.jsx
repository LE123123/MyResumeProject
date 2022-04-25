/* eslint-disable @next/next/no-img-element */
import React from "react";
import { UNDER_LINE_COLOR } from "#/colors";

import * as Styled from "#/components/Introduce/styled";
import YellowPoint from "#/components/YellowPoint";
import {
  FadeInContent,
  Underline,
  FadeInBodyText,
  FadeInHeaderText,
} from "#/components/gsap";
import { LAST_UPDATED } from "#/constants";

const Introduce = () => {
  return (
    <Styled.Container>
      <FadeInContent delay={1}>
        <Styled.Sidebar>
          <Styled.LinkContainer>
            <Styled.Link href="#" target="_blank">
              <span>GitHub</span>
              <YellowPoint>.</YellowPoint>
            </Styled.Link>
            <Styled.Link href="#" target="_blank">
              <span>LinkedIn</span>
              <YellowPoint>.</YellowPoint>
            </Styled.Link>
            <Styled.Link href="#" target="_blank">
              <span>Tistory Blog</span>
              <YellowPoint>.</YellowPoint>
            </Styled.Link>
            <Styled.Link href="#" target="_blank">
              <span>Velog</span>
              <YellowPoint>.</YellowPoint>
            </Styled.Link>
            <Styled.Link href="#" target="_blank">
              <span>YouTube</span>
              <YellowPoint>.</YellowPoint>
            </Styled.Link>
          </Styled.LinkContainer>

          <Styled.BottomContainer>
            <Styled.Email href="#">heart20021010@knu.ac.kr</Styled.Email>
            <Styled.LastUpdate>Last Update: {LAST_UPDATED}</Styled.LastUpdate>
          </Styled.BottomContainer>
        </Styled.Sidebar>
      </FadeInContent>

      <Styled.Main>
        <FadeInHeaderText delay={1.5}>
          <Styled.SubTitle>기록과 공유를 좋아하는</Styled.SubTitle>
        </FadeInHeaderText>

        <FadeInHeaderText delay={1.9}>
          <Styled.Title>
            <Underline color={UNDER_LINE_COLOR} delay={2.4}>
              이현서
            </Underline>
          </Styled.Title>
          <Styled.SubTitle>입니다.</Styled.SubTitle>
        </FadeInHeaderText>

        <FadeInBodyText delay={2.6}>
          <Styled.BodyTextContainer>
            <Styled.BodyText>프론트앤드 개발자를 희망하고 있습니다.</Styled.BodyText>
            <Styled.BodyText>
              배운 모든 것을 기록하고 공유하는 것을 좋아합니다.
            </Styled.BodyText>
            <Styled.BodyText>
              공유의 중요성을 잘 알기에 항상 새기고 실천하려고 노력합니다.
            </Styled.BodyText>
          </Styled.BodyTextContainer>
        </FadeInBodyText>

        <Styled.ImageBox>
          <img src="/hyunseo.jpg" alt="hyunseo-background" />
        </Styled.ImageBox>

        <FadeInContent delay={3.5}>
          <Styled.DownAnimatedArrow fontSize="large" />
        </FadeInContent>
      </Styled.Main>
    </Styled.Container>
  );
};

export default Introduce;
