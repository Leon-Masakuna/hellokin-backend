import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Post, PostDocument } from '../model/post.schema';
import { Model } from 'mongoose';
import { User } from '../model/user.schema';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) {}

  async create(createPostDto: CreatePostDto, user: User): Promise<Post> {
    const data = Object.assign(createPostDto, { user: user._id });
    return new this.postModel(data).save();
  }

  async findAll() {
    return this.postModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
