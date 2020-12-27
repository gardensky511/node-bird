import React from "react";
import Head from "next/head";

import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowerList from "../components/FollowerList";
import FollowingList from "../components/FollowingList";

const followingList = [
  { nickname: "정민" },
  { nickname: "노드노드노드" },
  { nickname: "React" },
];

const followerList = [
  { nickname: "정민" },
  { nickname: "노드노드노드" },
  { nickname: "React" },
];

const Profile = () => {
  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowingList header="팔로잉 목록" data={followingList} />
        <FollowerList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
