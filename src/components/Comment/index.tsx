import React, { useState } from 'react';
import { Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native';

import {
  ModalTitle,
  ModalContent,
  BottomModal,
  // @ts-ignore
} from 'react-native-modals';

import { useSelector } from 'react-redux';
import { selectUserID } from '../../redux/slices/userSlice';
import { selectPostOwnerID } from '../../redux/slices/sessionSlice';

import { API } from 'aws-amplify';
import { Comment as CommentType } from '../../API';
import * as mutations from '../../graphql/mutations';

import { calculateTime } from '../../tools/calculateTime';

import { fonts } from '../../styles/fonts';

// https://github.com/jacklam718/react-native-modals

export type commentItemProp = {
  comment: CommentType | null;
};

const Comment = ({ comment }: commentItemProp) => {
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [liked, setLiked] = useState(false);
  const userID = useSelector(selectUserID);
  const postOwnerID = useSelector(selectPostOwnerID);

  const deleteComment = async () => {
    let params: { [key: string]: string | undefined } = {
      id: comment?.id,
      content: 'Deleted comment',
      userNickname: '-deleted-',
      likes: '0',
      userID: 'DELETED_COMMENT',
    };
    await API.graphql({
      query: mutations.updateComment,
      variables: { input: params },
    });
  };

  // TODO: auth users to alter likes
  const likeComment = async () => {
    let curLikes = comment?.likes === undefined ? 0 : comment.likes;
    liked ? (curLikes -= 1) : (curLikes += 1);
    let params: { [key: string]: string | undefined } = {
      id: comment?.id,
      likes: curLikes.toString(),
    };
    await API.graphql({
      query: mutations.updateComment,
      variables: { input: params },
    });
    setLiked(!liked);
  };

  return (
    <>
      {comment !== null ? (
        <View style={{ paddingHorizontal: '5%' }}>
          <View style={{ flexDirection: 'row' }}>
            {comment.userID === postOwnerID ? (
              <>
                <Text style={styles.nickname}>{comment.userNickname}</Text>
                <Text style={styles.op}> OP</Text>
              </>
            ) : (
              <Text style={styles.nickname}>{comment.userNickname}</Text>
            )}
          </View>
          <Text style={styles.content}>{comment.content}</Text>
          <View style={[styles.statContainer, { marginTop: 6 }]}>
            <Text style={styles.stats}>{calculateTime(comment.createdAt)}</Text>
            <Pressable
              style={styles.statContainer}
              onPress={() => likeComment()}
            >
              <Image
                style={styles.icon}
                source={require('../../../assets/icons/likes.png')}
              />
              <Text style={styles.stats}>{comment.likes} Likes</Text>
            </Pressable>
            <Pressable
              style={styles.statContainer}
              onPress={() => Alert.alert('Reply clicked', comment.id)}
            >
              <Image
                style={styles.icon}
                source={require('../../../assets/icons/comment.png')}
              />
              <Text style={styles.stats}>Reply</Text>
            </Pressable>
            {comment.userID === userID ? (
              <Pressable
                style={[
                  styles.statContainer,
                  { position: 'absolute', right: 0 },
                ]}
                onPress={() => setShowModal(true)}
              >
                <Image
                  style={styles.editIcon}
                  source={require('../../../assets/icons/more_grey.png')}
                />
              </Pressable>
            ) : (
              <View></View>
            )}
          </View>
          <View style={[styles.divider, { marginTop: 12 }]} />
        </View>
      ) : (
        <View></View>
      )}
      <BottomModal
        visible={showModal}
        onTouchOutside={() => setShowModal(false)}
        onSwipeOut={() => setShowModal(false)}
        height={170}
        width={1}
        modalTitle={
          <ModalTitle
            title="Options"
            hasTitleBar
            style={{ backgroundColor: '#272F40' }}
            textStyle={{ color: '#FFFFFF' }}
          />
        }
      >
        <ModalContent>
          <Pressable style={styles.modalButton}>
            <Text>Edit comment</Text>
          </Pressable>
          <View style={styles.divider} />
          <Pressable
            style={styles.modalButton}
            onPress={() =>
              Alert.alert(
                'Alert',
                'Do you really want to delete your comment?',
                [
                  {
                    text: 'Cancel',
                    onPress: () => setShowModal(false),
                    style: 'cancel',
                  },
                  {
                    text: 'Yes',
                    onPress: () => {
                      deleteComment();
                      setShowModal(false);
                    },
                    style: 'default',
                  },
                ]
              )
            }
          >
            <Text>Delete comment</Text>
          </Pressable>
        </ModalContent>
      </BottomModal>
    </>
  );
};

export default Comment;

const styles = StyleSheet.create({
  icon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    marginStart: 20,
    marginEnd: 6,
  },
  editIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
  nickname: {
    ...fonts.body1,
    marginTop: 12,
  },
  op: {
    ...fonts.body2,
    marginTop: 12,
    color: 'red',
    fontWeight: 'bold',
  },
  content: {
    ...fonts.body1,
    fontWeight: 'normal',
  },
  statContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stats: {
    ...fonts.body1Light,
  },
  divider: {
    borderBottomColor: '#272F4026',
    borderBottomWidth: 1,
    marginHorizontal: '-100%',
  },
  modalButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: '100%',
  },
});
