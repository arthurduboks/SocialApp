/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Title from './components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import globalStyle from './assets/styles/globalStyle';
import UserStory from './components/UserStory/UserStory';
import UserPost from './components/UserPost/UserPost';

const App = () => {
  const userStories = [
    {
      firstName: 'Joseph',
      id: 1,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Angel',
      id: 2,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'White',
      id: 3,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Olivia',
      id: 4,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Arthur',
      id: 5,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Nicolas',
      id: 6,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Nina',
      id: 7,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Bob',
      id: 8,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'John',
      id: 9,
      profileImage: require('./assets/images/default_profile.png'),
    },
  ];
  const userPosts = [
    {
      firstName: 'Allison',
      lastName: 'Becker',
      location: 'Boston, MA',
      likes: 1200,
      comments: 20,
      bookmarks: 55,
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/default_profile.png'),
      id: 1,
    },
    {
      firstName: 'Johnny',
      lastName: 'Bravo',
      location: 'Los-Angeles, CA',
      likes: 1560,
      comments: 67,
      bookmarks: 70,
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/default_profile.png'),
      id: 2,
    },
    {
      firstName: 'Will',
      lastName: 'Sparrow',
      location: 'Worcester, MA',
      likes: 53,
      comments: 17,
      bookmarks: 9,
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/default_profile.png'),
      id: 3,
    },
    {
      firstName: 'Arthur',
      lastName: 'Johnson',
      location: 'Montreal, Canada',
      likes: 200,
      comments: 16,
      bookmarks: 14,
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/default_profile.png'),
      id: 4,
    },
    {
      firstName: 'Nicholas',
      lastName: 'Cage',
      location: 'Berlin, Germany',
      likes: 2000,
      comments: 90,
      bookmarks: 32,
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/default_profile.png'),
      id: 5,
    },
  ];

  const userStoriesPageSize = 4;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

  const userPostsPageSize = 4;
  const [userPostsCurrentPage, setUserPostsCurrentPage] = useState(1);
  const [userPostsRenderedData, setUserPostsRenderedData] = useState([]);
  const [isLoadingUserPosts, setIsLoadingUserPosts] = useState(false);

  const pagination = (database, currentPage, pageSize) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= database.length) {
      return [];
    }
    return database.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setIsLoadingUserStories(true);
    const getInitialData = pagination(userStories, 1, userStoriesPageSize);
    setUserStoriesRenderedData(getInitialData);
    setIsLoadingUserStories(false);
  }, []);

  return (
    <>
      <SafeAreaView>
        <View>
          <FlatList
            ListHeaderComponent={
              <>
                <View style={globalStyle.header}>
                  <Title title={"Let's Explore"} />
                  <TouchableOpacity
                    style={{
                      padding: 14,
                      borderRadius: 100,
                      backgroundColor: '#F9FAFB',
                    }}>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      size={20}
                      color={'#898DAE'}
                    />
                    <View style={globalStyle.messageNumberContainer}>
                      <Text style={globalStyle.messageNumber}>2</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={globalStyle.userStoryContainer}>
                  <FlatList
                    onEndReachedThreshold={0.5}
                    onEndReached={() => {
                      if (isLoadingUserStories) return;
                      const contentToAppend = pagination(
                        userStories,
                        userStoriesCurrentPage + 1,
                        userStoriesPageSize,
                      );
                      if (contentToAppend.length > 0) {
                        setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
                        setUserStoriesRenderedData(prev => [
                          ...prev,
                          ...contentToAppend,
                        ]);
                      }
                      setIsLoadingUserStories(false);
                    }}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={userStoriesRenderedData}
                    renderItem={({item}) => (
                      <UserStory
                        key={item.id}
                        firstName={item.firstName}
                        profileImage={item.profileImage}
                      />
                    )}
                  />
                </View>
              </>
            }
            data={userPosts}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={globalStyle.userPostContainer}>
                <UserPost
                  firstName={item.firstName}
                  lastName={item.lastName}
                  image={item.image}
                  likes={item.likes}
                  comments={item.comments}
                  bookmarks={item.bookmarks}
                  profileImage={item.profileImage}
                  location={item.location}
                />
              </View>
            )}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
