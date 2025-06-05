import React from "react";
import avatar from "/avatar.png";
import penIcon from "/icons/edit.svg";
import addIcon from "/icons/add.svg";

const Profile = () => {
    return (
        <section className="flex justify-between items-end my-10 pb-10 border-b border-b-main-border ">
            <div id="user-profile" className="flex items-start gap-6">
                <img src={avatar} alt="profile-image" />
                <div className="profile-info h-full">
                    <div className="profile-text space-y-2">
                        <h4 className="text-3xl text-main-darks font-medium">
                            Bessie Coleman
                        </h4>
                        {/* <p className="text-main-text font-medium">Civil Aviator</p> */}
                        <p className="text-main-text font-medium max-w-[400px]">Known mononymously as Akon (/ˈeɪkɒn/), is a Senegalese-American singer, record producer, and entrepreneur. An influential figure in modern world...</p>
                    </div>


                    <button
                        id="edit-profile"
                        className="flex gap-3 text-main-text items-center font-medium pt-10"
                    >
                        <img src={penIcon} alt="edit-icon" />
                        Edit Profile
                    </button>

                </div>

            </div>

            <button id="new-post" className="capitalize flex gap-3 cursor-pointer text-white py-4 px-6 bg-main-darks text-sm rounded-md">
                <img src={addIcon} />
                New post
            </button>
        </section>
    );
};

export default Profile;
